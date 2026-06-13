export const adZones = {
  // Homepage
  homepage: {
    leaderboard: { id: 1, width: 728, height: 90 },
  },
  // Article / technical pages
  article: {
    leaderboard: { id: 2, width: 728, height: 90 },
    rectangleInContent: { id: 3, width: 300, height: 250 },
    rectangleSidebar: { id: 3, width: 300, height: 250 },
    halfPage: { id: 4, width: 300, height: 600 },
  },
  // Classifieds
  classifieds: {
    leaderboardTop: { id: 2, width: 728, height: 90 },
    nativeSponsored: { id: 5, width: 728, height: 90 },
    leaderboardMid: { id: 2, width: 728, height: 90 },
    rectangleSidebar: { id: 3, width: 300, height: 250 },
    halfPage: { id: 4, width: 300, height: 600 },
  },
  // Specs / docs
  specs: {
    rectangleSidebar: { id: 3, width: 300, height: 250 },
  },
  // Market / valuation
  market: {
    leaderboard: { id: 2, width: 728, height: 90 },
    rectangleInContent: { id: 3, width: 300, height: 250 },
    halfPage: { id: 4, width: 300, height: 600 },
  },
  // Guides
  guides: {
    leaderboard: { id: 2, width: 728, height: 90 },
    rectangleInContent: { id: 3, width: 300, height: 250 },
    halfPage: { id: 4, width: 300, height: 600 },
  },
  // Parts
  parts: {
    rectangleSidebar: { id: 3, width: 300, height: 250 },
    nativeSponsored: { id: 5, width: 728, height: 90 },
  },
  // Mobile replacements
  mobile: {
    banner: { id: 6, width: 320, height: 50 },
  },
} as const
