import { v4 as uuidv4 } from "uuid";

export type SectionType =
  | "basic-information"
  | "business-information"
  | "lead-generation-need"
  | "current-market-performance"
  | "challenges-and-goals"
  | "decision-making-process"
  | "timeline"
  | "addition-info";

export const sectionList: SectionType[] = [
  "basic-information",
  "business-information",
  "lead-generation-need",
  "current-market-performance",
  "challenges-and-goals",
  "decision-making-process",
  "timeline",
  "addition-info",
];

export const sectionNames = [
  "Basic Information",
  "Business Information",
  "Marketing and Lead Generation Needs",
  "Current Marketing Performance",
  "Challenges and Goals",
  "Decision-Making Process",
  "Timeline",
  "Additional Information",
];

export const sectionFields: Record<string, string[]> = {
  0: ["name", "companyName", "emailAddress", "phoneNumber", "website"],
  1: ["businessIndustry", "operatingYears", "companySize"],
  2: [
    "primaryGoals",
    "satisfiedWithCurrentStrategy",
    "areaOfImprovement",
    "currentMarketingChannels",
    "monthlyMarketingBudget",
    "haveInhouseMarketingTeam",
    "marketingTeamMembers",
  ],
  3: [
    "averageMonthlyLeadGeneration",
    "currentConversionRate",
    "biggestLeadGenerationChallenge",
  ],
  4: ["biggestChallengeInMarketing", "specificGoal"],
  5: ["isDecisionMaker", "otherEntitiesInvolved"],
  6: ["timeline"],
  7: ["additionalInformation"],
};

export const getSectionFields = (secIndex: number) => {
  if (secIndex >= Object.keys(sectionFields).length) return null;
  if (secIndex in sectionFields) return sectionFields[secIndex];
  return null;
};

export const primaryGoals = [
  { id: uuidv4(), value: "Increase brand awareness" },
  { id: uuidv4(), value: "Generate more leads" },
  { id: uuidv4(), value: "Improve lead quality" },
  { id: uuidv4(), value: "Improve sales/revenue" },
  { id: uuidv4(), value: "Improve customer retention" },
  { id: uuidv4(), value: "Drive website traffic" },
  { id: uuidv4(), value: "Enhance social media presence" },
  { id: uuidv4(), value: "Others (please specify)" },
];

export const currentMarketingChannels = [
  { id: uuidv4(), value: "Email marketing" },
  { id: uuidv4(), value: "Social media" },
  { id: uuidv4(), value: "Search engine optimization (SEO)" },
  { id: uuidv4(), value: "Pay-per-click (PPC) advertising" },
  { id: uuidv4(), value: "Content marketing" },
  { id: uuidv4(), value: "Others (please specify)" },
];

export const biggestLeadGenerationChallenge = [
  { id: uuidv4(), value: "Attracting the right audience" },
  { id: uuidv4(), value: "Converting leads into customers" },
  { id: uuidv4(), value: "Measuring ROI" },
  { id: uuidv4(), value: "Scaling marketing efforts" },
  { id: uuidv4(), value: "Others (please specify)" },
];
