// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Importing the OpenZeppelin contracts for ERC20 token interaction and ownership management
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Interface for the Sablier protocol
interface ISablier {
    function createStream(
        address recipient,
        uint256 deposit,
        address tokenAddress,
        uint256 startTime,
        uint256 stopTime
    ) external returns (uint256);
}

// The main contract for the Zero Knowledge and Privacy Pool
contract ZKPrivacyPool is Ownable {
    // ERC20 token used for funding
    IERC20 public fundingToken;
    // The Sablier protocol contract used for streaming payments
    ISablier public sablier;

    // A structure defining a funding proposal
    struct Proposal {
        address proposer;
        uint256 amount;
        StreamType streamType;
        uint256 duration;
        uint256 startTime;
        uint256 yesVotes;
        bool approved;
        bool exists;
    }

    // Enumeration for the type of payment stream
    enum StreamType { Linear, Cliff }

    // Mapping from proposal ID to proposal structure for storing proposals
    mapping(uint256 => Proposal) public proposals;
    // Counter for the next proposal ID
    uint256 public nextProposalId;

    // Mapping from contributor address to their contribution amount
    mapping(address => uint256) public contributions;
    // Total contributions in the pool
    uint256 public totalContributions;

    // Events for logging contract activity
    event Contribution(address indexed contributor, uint256 amount);
    event NewProposal(
        uint256 indexed proposalId,
        address indexed proposer,
        uint256 amount,
        StreamType streamType,
        uint256 duration,
        uint256 startTime
    );
    event Vote(uint256 indexed proposalId, address indexed voter, bool vote);
    event ProposalApproved(uint256 indexed proposalId);
    event StreamFunded(uint256 indexed proposalId, uint256 streamId);

    // Constructor initializes the contract with the ERC20 token and Sablier contract addresses
    constructor(IERC20 _fundingToken, ISablier _sablier) {
        fundingToken = _fundingToken;
        sablier = _sablier;
    }

    // Function to allow contributions to the pool
    function contribute(uint256 amount) external {
        fundingToken.transferFrom(msg.sender, address(this), amount);
        contributions[msg.sender] += amount;
        totalContributions += amount;
        emit Contribution(msg.sender, amount);
    }

    // Function to allow developers to create a funding proposal
    function createProposal(
        uint256 amount,
        StreamType streamType,
        uint256 duration,
        uint256 startTime
    ) external {
        require(startTime > block.timestamp, "Start time must be in the future");
        proposals[nextProposalId] = Proposal({
            proposer: msg.sender,
            amount: amount,
            streamType: streamType,
            duration: duration,
            startTime: startTime,
            yesVotes: 0,
            approved: false,
            exists: true
        });
        emit NewProposal(nextProposalId, msg.sender, amount, streamType, duration, startTime);
        nextProposalId++;
    }

    // Function to allow contributors to vote on proposals
    function vote(uint256 proposalId, bool support) external {
        require(contributions[msg.sender] > 0, "Only contributors can vote");
        Proposal storage proposal = proposals[proposalId];
        require(proposal.exists, "Proposal does not exist");
        require(block.timestamp < proposal.startTime, "Voting period has ended");
        
        if (support) {
            proposal.yesVotes++;
        }
        emit Vote(proposalId, msg.sender, support);
    }

    // Function to execute a proposal after the voting period has ended
    function executeProposal(uint256 proposalId) external {
        Proposal storage proposal = proposals[proposalId];
        require(proposal.exists, "Proposal does not exist");
        require(block.timestamp >= proposal.startTime, "Voting period has not ended");
        require(!proposal.approved, "Proposal already approved");
        require(proposal.yesVotes * 2 >= totalContributions, "Proposal not approved by majority");

        // Logic to create a Sablier stream if proposal is approved
        uint256 stopTime = block.timestamp + proposal.duration;
        uint256 streamId = sablier.createStream(proposal.proposer, proposal.amount, address(fundingToken), block.timestamp, stopTime);
        proposal.approved = true;

        emit ProposalApproved(proposalId);
        emit StreamFunded(proposalId, streamId);
    }

    // Additional functions and modifiers to handle voting rights, fund distribution, and Sablier integration can be added here
}
