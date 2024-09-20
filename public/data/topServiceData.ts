import profile2 from "../../src/assets/profile2.png";
import profile from "../../src/assets/profile2.png";
import { SectionData } from "@/types";
import poster1 from "../../src/assets/image1.png";
import poster2 from "../../src/assets/image2.png";
import poster3 from "../../src/assets/image3.png";
import poster4 from "../../src/assets/image4.png";

export const chartData = {
  activeServiceProvider: [3200, 3000, 2500, 3600, 2800, 4200, 4500],
  serviceProviderRetentionRate: [3100, 4300, 3200, 4100, 1700, 4000, 3100],
  newServiceProvider: [1000, 1300, 4050, 1550, 2050, 3600, 3550],
  serviceCompletionRate: [3500, 2300, 3700, 4300, 3400, 3900, 2900],
  totalServiceProvider: [2000, 3300, 2800, 3200, 2200, 3300, 4400],
  averageRating: [2500, 2100, 2650, 2200, 3300, 2400, 3450],
};

export const topServiceProvidersData = [
  {
    posterImage: poster1, // Placeholder for poster image
    label: "Construction Sector",
    userList: [
      { id: 1, image: profile2, name: "John Doe" },
      { id: 2, image: profile, name: "Jane Smith" },
      { id: 3, image: profile2, name: "Alice Johnson" },
      { id: 4, image: "https://via.placeholder.com/50", name: "Bob Brown" },
      { id: 1, image: profile2, name: "John Doe" },
      { id: 2, image: profile, name: "Jane Smith" },
      { id: 3, image: profile2, name: "Alice Johnson" },
      { id: 4, image: "https://via.placeholder.com/50", name: "Bob Brown" },
      { id: 1, image: profile2, name: "John Doe" },
      { id: 2, image: profile, name: "Jane Smith" },
      { id: 3, image: profile2, name: "Alice Johnson" },
      { id: 4, image: "https://via.placeholder.com/50", name: "Bob Brown" },
      { id: 1, image: profile2, name: "John Doe" },
      { id: 2, image: profile, name: "Jane Smith" },
      { id: 3, image: profile2, name: "Alice Johnson" },
      { id: 4, image: "https://via.placeholder.com/50", name: "Bob Brown" },
    ],
    percentageIncrease: 11.02,
  },
  {
    posterImage: poster2, // Placeholder for poster image
    label: "Healthcare Sector",
    userList: [
      { id: 1, image: profile, name: "Chris Evans" },
      { id: 2, image: profile2, name: "Sarah Parker" },
      { id: 3, image: profile, name: "Martha Stewart" },
      { id: 4, image: "https://via.placeholder.com/50", name: "Daniel Craig" },
    ],
    percentageIncrease: 10.02,
  },
  {
    posterImage: poster3, // Placeholder for poster image
    label: "Technology Sector",
    userList: [
      { id: 1, image: profile, name: "Chris Evans" },
      { id: 2, image: profile2, name: "Sarah Parker" },
      { id: 3, image: profile, name: "Martha Stewart" },
      { id: 4, image: "https://via.placeholder.com/50", name: "Larry Page" },
    ],
    percentageIncrease: 9,
  },
  {
    posterImage: poster4, // Placeholder for poster image
    label: "Retail Sector",
    userList: [
      { id: 1, image: profile, name: "Chris Evans" },
      { id: 2, image: profile2, name: "Sarah Parker" },
      { id: 3, image: profile, name: "Martha Stewart" },
      { id: 4, image: "https://via.placeholder.com/50", name: "Doug McMillon" },
    ],
    percentageIncrease: 5,
  },
];

export const sections: SectionData[] = [
  {
    title: "Support tickets",
    cards: [
      {
        id: "019273645",
        name: "Name of the Raiser",
        avatarUrl: profile2,
        tags: ["Technical Error", "Healthcare"],
        title: "I am facing Technical Issue during the Signup process",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        status: "Escalated",
        statusType: "escalated",
      },
      {
        id: "019273645",
        name: "Robert Williams",
        avatarUrl: profile,
        tags: ["Healthcare", "Technical Error"],
        title: "I am facing Technical Issue during the Signup process",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        status: "Open",
        statusType: "open",
      },
    ],
  },
  {
    title: "Open tickets",
    cards: [
      {
        id: "019273645",
        name: "Robert Williams",
        avatarUrl: profile2,
        tags: ["Healthcare", "Technical Error"],
        title: "I am facing Technical Issue during the Signup process",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        status: "Open",
        statusType: "open",
      },
      {
        id: "019273645",
        name: "Robert Williams",
        avatarUrl: profile,
        tags: ["Healthcare", "Technical Error"],
        title: "I am facing Technical Issue during the Signup process",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        status: "Open",
        statusType: "open",
      },
    ],
  },
  {
    title: "In Progress",
    cards: [
      {
        id: "019273645",
        name: "Robert Williams",
        avatarUrl: profile2,
        tags: ["Healthcare", "Technical Error"],
        status: "Pending",
        statusType: "pending",
      },
      {
        id: "019273645",
        name: "Robert Williams",
        avatarUrl: profile,
        tags: ["Healthcare", "Technical Error"],
        status: "Pending",
        statusType: "pending",
      },
    ],
  },
  {
    title: "Solved",
    cards: [
      {
        id: "019273645",
        name: "Robert Williams",
        avatarUrl: profile2,
        tags: ["Healthcare", "Technical Error"],
        title: "I am facing Technical Issue during the Signup process",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        status: "Resolved",
        statusType: "resolved",
      },
      {
        id: "019273645",
        name: "Robert Williams",
        avatarUrl: profile,
        tags: ["Healthcare", "Technical Error"],
        title: "I am facing Technical Issue during the Signup process",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        status: "Resolved",
        statusType: "resolved",
      },
    ],
  },
  {
    title: "Compliance Status",
    cards: [
      {
        id: "019273645",
        name: "Robert Williams",
        avatarUrl: profile2,
        tags: ["Healthcare", "Technical Error"],
        status: "Pending",
        statusType: "pending",
      },
      {
        id: "019273645",
        name: "Robert Williams",
        avatarUrl: profile,
        tags: ["Healthcare", "Technical Error"],
        status: "Pending",
        statusType: "pending",
      },
    ],
  },
];
