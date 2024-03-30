// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Importing OpenZeppelin's IERC20 interface to interact with ERC20 tokens
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// Importing OpenZeppelin's Ownable contract to restrict access to certain functions
import "@openzeppelin/contracts/access/Ownable.sol";

// The main contract for the Zero Knowledge and Privacy Pool
contract ZKPrivacyPool is Ownable {
    // ERC20 token that will be used for contributions
    IERC20 public immutable contributionToken;

    // A struct to represent a funding proposal
    struct Proposal {
        address proposer;          // Address of the individual proposing the project
        uint256 amountRequested;   // The amount of tokens requested for funding
        bool isApproved;           // Whether the proposal has been approved
        bool isFinalized;          // Whether the voting has been finalized
        uint256 endTime;           // The time when the voting ends
        uint256 yesVotes;          // The number of yes votes the proposal has received
    }

    // An array to store all proposals
    Proposal[] public proposals;
    // A mapping to track the amount contributed by each address
    mapping(address => uint256) public contributions;
    // The total amount of funds in the pool
    uint256 public totalFunds;

    // Events to log contract activity
    event Contribution(address indexed contributor, uint256 amount);
    event ProposalCreated(uint256 indexed proposalId);
    event ProposalFinalized(uint256 indexed proposalId, bool approved);
    event Vote(uint256 indexed proposalId, address indexed voter, bool vote);


    // Constructor to set the token that will be used for contributions
    constructor(IERC20 _contributionToken) Ownable(msg.sender) {
        contributionToken = _contributionToken;
    }



    // Function to allow contributors to contribute tokens to the pool
    function contribute(uint256 amount) external {
        // Transferring tokens from the contributor to the pool contract
        contributionToken.transferFrom(msg.sender, address(this), amount);
        // Updating the contributions mapping and the total funds
        contributions[msg.sender] += amount;
        totalFunds += amount;
        emit Contribution(msg.sender, amount);
    }

    // Function for developers to create a funding proposal
    function createProposal(uint256 amountRequested) external {
        // Creating a new proposal and adding it to the proposals array
        proposals.push(Proposal({
            proposer: msg.sender,
            amountRequested: amountRequested,
            isApproved: false,
            isFinalized: false,
            endTime: block.timestamp + 1 weeks, // Voting ends 1 week from now
            yesVotes: 0
        }));
        emit ProposalCreated(proposals.length - 1);
    }

    // Function to allow contributors to vote on proposals
    function vote(uint256 proposalId, bool approve) external {
        // Ensuring that the voter has contributed and thus has the right to vote
        require(contributions[msg.sender] > 0, "Not a contributor");
        // Fetching the proposal by ID
        Proposal storage proposal = proposals[proposalId];
        // Ensuring that the vote is cast before the end time
        require(block.timestamp < proposal.endTime, "Voting has ended");
        // Ensuring that the proposal has not been finalized yet
        require(!proposal.isFinalized, "Proposal already finalized");

        // Incrementing the vote count based on the vote
        if (approve) {
            proposal.yesVotes += 1;
        }

        emit Vote(proposalId, msg.sender, approve);
    }

    // Function to finalize the proposal after the voting period has ended
    function finalizeProposal(uint256 proposalId) external {
        // Fetching the proposal by ID
        Proposal storage proposal = proposals[proposalId];
        // Ensuring that the current time is past the proposal end time
        require(block.timestamp >= proposal.endTime, "Voting period has not ended");
        // Ensuring that the proposal has not been finalized yet
        require(!proposal.isFinalized, "Proposal already finalized");

        // Finalizing the proposal
        proposal.isFinalized = true;
        // Checking if the majority of the votes are yes
        if (proposal.yesVotes * 2 >= totalFunds) {
            proposal.isApproved = true;
        }

        emit ProposalFinalized(proposalId, proposal.isApproved);
    }
    
    // Additional functions and modifiers to handle voting rights, fund distribution, and Sablier integration can be added here
}
