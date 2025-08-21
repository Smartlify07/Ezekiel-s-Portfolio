import { AboutProjectSection } from './components/about-project';
import { ApproachSection } from './components/approach-section';
import { BrainstormSection } from './components/brainstoming-section';
import { ChallengesSection } from './components/challenges-section';
import { DesignGoalSection } from './components/design-goal';
import { FinalShowCaseSection } from './components/final-showcase';
import { HighlightsSection } from './components/highlights-section';
import { OutcomeSection } from './components/outcome-section';
import { ProjectStats } from './components/project-stats';
import { TopSection } from './components/top-section';
import { UpcomingCaseStudies } from './components/upcoming-casestudies';

export default function ProjectDetailsPage() {
  return (
    <main className="grid gap-10 font-geist">
      <TopSection />
      <div className="grid px-6 gap-10">
        <ProjectStats title="Maxwell EV Charging" />
        <AboutProjectSection />
        <DesignGoalSection />
        <ChallengesSection />
        <ApproachSection />
        <BrainstormSection />
        <HighlightsSection />
        <OutcomeSection />
        <FinalShowCaseSection />
        <UpcomingCaseStudies />
      </div>
    </main>
  );
}
