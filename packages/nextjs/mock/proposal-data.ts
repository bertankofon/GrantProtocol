const proposalMockData = [
  {
    id: 1,
    status: "Approved",
    title: "Decentralized Social Media Platform",
    name: "SocialDeX",
    owner: "0x4b7866e717f27Fa1C38313D25F647aE0598571BD",
    pool_owner: "0x4b7866e717f27Fa1C38313D25F647aE0598571BD",
    created: new Date("2023-05-01").toISOString(),
    votes: {
      for: 12,
      against: 4,
      abstain: 1,
    },
    description:
      "<p>SocialDeX is a revolutionary decentralized social media platform built on the Arbitrum blockchain, offering a censorship-resistant and privacy-focused environment for content sharing and social interactions.</p><p>With SocialDeX, users have complete control over their data and content, eliminating the risk of censorship or data exploitation by centralized platforms. By leveraging blockchain technology and decentralized storage solutions, SocialDeX ensures that user data and content are securely stored and accessible across a distributed network.</p><p>One of the key features of SocialDeX is its content monetization capabilities. Users can tokenize and sell their content directly to their audience, enabling new revenue streams and incentivizing high-quality content creation. Additionally, SocialDeX incorporates advanced privacy features, such as end-to-end encryption and anonymous posting, to protect user privacy and freedom of expression.</p>",
    image: "https://source.unsplash.com/_rqDHdrKIJs",
    raising: "500,000",
    milestones: [
      {
        id: 1,
        title: "Core Platform Development",
        description:
          "Develop the core decentralized social media platform, including user registration, content creation, and basic social features.",
        completed: true,
      },
      {
        id: 2,
        title: "Content Monetization",
        description:
          "Implement content tokenization and monetization features, enabling users to sell their content and earn rewards.",
        completed: false,
      },
      {
        id: 3,
        title: "Privacy and Security Enhancements",
        description:
          "Integrate advanced privacy and security features, such as end-to-end encryption, anonymous posting, and zero-knowledge proofs.",
        completed: false,
      },
    ],
    socials: {
      website: "https://socialdex.xyz",
      twitter: "@socialdex",
      github: "socialdex",
    },
    tags: [
      {
        id: 1,
        tag: "Pre-Seed",
      },
      {
        id: 2,
        tag: "SocialFi",
      },
    ],
    past_rounds: [
      {
        id: 1,
        pool: "zkPool",
        stream: "https://app.sablier.com/stream/LL2-11155111-897/",
        duration: `${new Date("2023-02-01").toLocaleDateString()} - ${new Date("2023-03-15").toLocaleDateString()}`,
      },
    ],
  },
  {
    id: 2,
    status: "In Progress",
    title: "Blockchain-based Supply Chain Management",
    name: "SupplyChain360",
    owner: "0x2c6C6f6C38413E2fe72DE7E17986c289E923a0fE",
    pool_owner: "0x4b7866e717f27Fa1C38313D25F647aE0598571BD",
    created: new Date("2023-04-15").toISOString(),
    votes: {
      for: 8,
      against: 2,
      abstain: 4,
    },
    description:
      "<p>SupplyChain360 is a cutting-edge blockchain-based supply chain management solution that aims to revolutionize the way products are tracked and traced throughout their lifecycle.</p><p>By leveraging the immutable and transparent nature of blockchain technology, SupplyChain360 provides an unalterable record of all supply chain events, from raw material sourcing to final delivery. This enables unprecedented levels of transparency, traceability, and accountability across the entire supply chain.</p><p>Through the integration of smart contracts and Internet of Things (IoT) devices, SupplyChain360 automates and streamlines various supply chain processes, reducing the risk of human error, fraud, and inefficiencies. Stakeholders can track the movement of goods in real-time, verify product authenticity, and access comprehensive audit trails.</p>",
    image: "https://source.unsplash.com/oh0DITWoHi4",
    raising: "300,000",
    milestones: [
      {
        id: 1,
        title: "Blockchain Integration",
        description:
          "Integrate the supply chain management solution with the Arbitrum blockchain and develop smart contracts for supply chain automation.",
        completed: true,
      },
      {
        id: 2,
        title: "IoT Device Integration",
        description:
          "Integrate IoT devices for real-time tracking and monitoring of goods throughout the supply chain.",
        completed: false,
      },
      {
        id: 3,
        title: "User Interface Development",
        description:
          "Develop a user-friendly interface for stakeholders to interact with the supply chain management system and access real-time data.",
        completed: false,
      },
    ],
    socials: {
      website: "https://supplychain360.com",
      twitter: "@supplychain360",
      github: "supplychain360",
    },
    tags: [
      {
        id: 1,
        tag: "Seed",
      },
      {
        id: 2,
        tag: "IoT",
      },
    ],
    past_rounds: [
      {
        id: 1,
        pool: "Decentralized Social Media Platform",
        stream: "SocialDeX",
        duration: "0x4b7866e717f27Fa1C38313D25F647aE0598571BD",
      },
    ],
  },
  {
    id: 3,
    status: "Pending",
    title: "Decentralized Identity Platform",
    name: "IdentityX",
    owner: "0x8a3C5c3e7b806552C56740717fF2F6779d5b4419",
    pool_owner: "0x4b7866e717f27Fa1C38313D25F647aE0598571BD",
    created: new Date("2023-06-10").toISOString(),
    votes: {
      for: 6,
      against: 10,
      abstain: 0,
    },
    description:
      "<p>IdentityX is a groundbreaking decentralized identity platform that empowers individuals to take control of their digital identities and personal data.</p><p>Built on the Arbitrum blockchain, IdentityX leverages self-sovereign identity principles to give users full ownership and management of their identities, eliminating the need for centralized authorities or intermediaries.</p><p>With IdentityX, users can create and manage their digital identities, issue and verify credentials, and selectively disclose personal information to third parties while maintaining privacy and data minimization. Advanced cryptographic techniques, such as zero-knowledge proofs, ensure that users can prove certain attributes about themselves without revealing sensitive information.</p>",
    image: "https://source.unsplash.com/SRFG7iwktDk",
    raising: "200,000",
    milestones: [
      {
        id: 1,
        title: "Identity Creation and Management",
        description:
          "Develop the core functionality for users to create and manage their decentralized identities on the Arbitrum blockchain.",
        completed: false,
      },
      {
        id: 2,
        title: "Verifiable Credentials",
        description:
          "Implement verifiable credential issuance and verification, enabling users to prove their identities and attributes securely.",
        completed: false,
      },
      {
        id: 3,
        title: "Zero-Knowledge Proof Integration",
        description:
          "Integrate zero-knowledge proof techniques to enable selective disclosure of personal information while maintaining privacy.",
        completed: false,
      },
    ],
    socials: {
      website: "https://identityx.com",
      twitter: "@identityx",
      github: "identityx",
    },
    tags: [
      {
        id: 1,
        tag: "Pre-Seed",
      },
      {
        id: 2,
        tag: "Identity",
      },
    ],
    past_rounds: [
      {
        id: 1,
        pool: "Decentralized Social Media Platform",
        stream: "SocialDeX",
        duration: "0x4b7866e717f27Fa1C38313D25F647aE0598571BD",
      },
    ],
  },
];

export default proposalMockData;
