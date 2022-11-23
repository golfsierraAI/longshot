export const intentMap = {
  0: {
    type: "Commercial",
    "hover-text": "The user wants to investigate brands or services.",
    color: { bg: "#FCE081", text: "#A75800", hover: "#ffca6e" },
  },
  1: {
    type: "Informational",
    "hover-text": "The user wants to find an answer to a specific question.",
    color: { bg: "#C4E5FE", text: "#006DCA", hover: "#61c6ff" },
  },
  2: {
    type: "Navigational",
    "hover-text": "The user wants to find a specific page or site.",
    color: { bg: "#EDD9FF", text: "#8649E1", hover: "#c59dfa" },
  },
  3: {
    type: "Transactional",
    "hover-text": "The user wants to complete an action (conversion).",
    color: { bg: "#9EF2C9", text: "#007C65", hover: "#11d6a6" },
  },
};

export const keywordDifficulty = function (value) {
  if (value > 85) {
    return {
      rating: "Very hard",
      text: "The absolute hardest keywords to compete for, especially for a new website. These will demand a lot of on page SEO, link building, and content promotion efforts to eventually rank and acquire traffic.",
      color: "#D1002F",
    };
  } else if (value >= 70) {
    return {
      rating: "Hard",
      text: "Even stiffer competition. These keywords will demand more effort in terms of getting higher authority referring domains in order to rank your well-optimized and helpful content among the top pages.",
      color: "#FF4953",
    };
  } else if (value >= 50) {
    return {
      rating: "Difficult",
      text: "You'll need to have some backlinks in addition to your well-structured, helpful and optimized content in order to compete here.",
      color: "#FF8C43",
    };
  } else if (value >= 30) {
    return {
      rating: "Possible",
      text: "Slightly more competition. You'll need well-structured and unique content appropriately optimized for your keywords.",
      color: "#FDC23C",
    };
  } else if (value >= 15) {
    return {
      rating: "Easy",
      text: "These keywords have some competition but are still possible to rank for when you're starting out. To be able to rank for these, you'll need quality content focused on the keyword's intent.",
      color: "#59DDAA",
    };
  } else {
    return {
      rating: "Very easy",
      text: "These are the best opportunities to start ranking new webpages on Google as soon as possible without backlinks.",
      color: "#009F81",
    };
  }
};
