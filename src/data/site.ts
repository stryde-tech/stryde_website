import leaderboardScreen from "../assets/stryde_leaderboard_global_screen.jpeg";
import loginScreen from "../assets/stryde_login_screen.jpeg";
import nexusShareGroup from "../assets/nexus_share_group.jpeg";
import nexusShareMoments from "../assets/nexus_share_moments.jpeg";
import runReplayVideo from "../assets/share_run_replay.mp4";
import myRunsScreen from "../assets/stryde_my_runs_screen.jpeg";
import nexusScreen from "../assets/stryde_nexus_screen.jpeg";
import orbitHomeScreen from "../assets/stryde_orbit_home_screen.jpeg";
import soloShareOne from "../assets/solo_share1.jpeg";
import soloShareTwo from "../assets/solo_share2.jpeg";
import soloRunScreen from "../assets/stryde_solo_run_screen.jpeg";
import statsOneScreen from "../assets/stryde_stats1_screen.jpeg";
import statsTwoScreen from "../assets/stryde_stats2_screen.jpeg";

export const appScreens = {
  leaderboard: leaderboardScreen,
  login: loginScreen,
  myRuns: myRunsScreen,
  nexus: nexusScreen,
  orbitHome: orbitHomeScreen,
  soloRun: soloRunScreen,
  statsOne: statsOneScreen,
  statsTwo: statsTwoScreen,
};

export const shareAssets = {
  replay: runReplayVideo,
  solo: [
    {
      src: soloShareOne,
      alt: "Stryde solo run share card template",
      title: "Solo Run Card",
      description: "A compact share template for completed solo efforts.",
    },
    {
      src: soloShareTwo,
      alt: "Stryde solo run stats share card template",
      title: "Solo Stats Card",
      description: "A more stat-forward template for pace, distance, and streak context.",
    },
  ],
  nexus: [
    {
      src: nexusShareGroup,
      alt: "Stryde Nexus group share card template",
      title: "Nexus Group Card",
      description: "A share template for live group run participation and results.",
    },
    {
      src: nexusShareMoments,
      alt: "Stryde Nexus moments share card template",
      title: "Nexus Moments Card",
      description: "A recap template for moments, podiums, and post-run highlights.",
    },
  ],
};

export const sampleRun = {
  runner: "Aarav Mehta",
  title: "Evening Solo Run",
  city: "Mumbai",
  distance: "7.42 km",
  pace: "4:36 / km",
  duration: "34:08",
  elevation: "82 m",
  streak: "18 days",
};

export const sampleNexusSummary = {
  title: "Midnight Tempo Nexus",
  window: "Friday 21:00 - Saturday 02:00",
  runners: "2,418",
  distance: "5K",
  city: "Global",
  winner: "Maya Rao",
  topPace: "4:08 / km",
};
