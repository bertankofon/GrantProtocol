// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Assuming the Sablier interface is defined in this path
import "./ISablier.sol"; 

contract ZKPool is Ownable {
    IERC20 public immutable fundingToken;
    ISablier public immutable sablier;
    uint256 public constant MULTIPLE = 1e18; // Using 1e18 to represent 1 token unit for a token with 18 decimals

    struct Proposal {
        address proposer;
        uint256 amount;
        uint256 endTimestamp; // Sablier stream end time
        bool isApproved;
        bool exists;
    }

    mapping(uint256 => Proposal) public proposals;
    uint256 public nextProposalId;

    mapping(address => uint256) public contributions;
    uint256 public totalPoolBalance;
    
    // Add events for logging contract activity
    event ContributionReceived(address indexed contributor, uint256 amount);
    event ProposalCreated(uint256 indexed proposalId, address indexed proposer, uint256 amount, uint256 endTimestamp);
    event ProposalApproved(uint256 indexed proposalId);
    event FundsDistributed(uint256 indexed proposalId, uint256 streamId);

    constructor(IERC20 _fundingToken, ISablier _sablier) {
        fundingToken = _fundingToken;
        sablier = _sablier;
    }

    // Function for contributors to record their contributions to the pool
    // The actual transfer should be handled in the UI via `transferFrom` with prior approval
    function contribute(uint256 amount) external {
        require(amount % MULTIPLE == 0, "Contribution must be a multiple of the unit");
        contributions[msg.sender] += amount;
        totalPoolBalance += amount;
        emit ContributionReceived(msg.sender, amount);
    }

    // Function for creating new funding proposals
    function createProposal(uint256 amount, uint256 endTimestamp) external {
        proposals[nextProposalId] = Proposal({
            proposer: msg.sender,
            amount: amount,
            endTimestamp: endTimestamp,
            isApproved: false,
            exists: true
        });
        emit ProposalCreated(nextProposalId, msg.sender, amount, endTimestamp);
        nextProposalId++;
    }

    // Function for contributors to approve proposals
    function approveProposal(uint256 proposalId) external {
        require(contributions[msg.sender] > 0, "Only contributors can approve");
        Proposal storage proposal = proposals[proposalId];
        require(proposal.exists, "Proposal does not exist");
        require(!proposal.isApproved, "Proposal already approved");

        proposal.isApproved = true;
        emit ProposalApproved(proposalId);

        // Code to initiate the Sablier stream will be placed here
        uint256 streamId; // Placeholder, this should be obtained from the Sablier contract
        emit FundsDistributed(proposalId, streamId);
    }

    // Additional functions and modifiers to handle voting rights, fund distribution, and Sablier integration would be added here
}