// SVG 경로는 나중에 추가 예정
// import svgPaths from "./svg-bx8z7x6dr6";
// useActiveBreakpoint는 HTML에서 정의됨

function FFLogoDesktop() {
  return (
    <a className="block cursor-pointer h-[16.28px] relative shrink-0 w-[37.912px]" data-name="F&F logo" href="/">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 17">
        <g id="F&F logo">
          <path d="M0,0" fill="var(--fill-0, black)" id="Vector" />
          <path d="M0,0" fill="var(--fill-0, black)" id="Vector_2" />
          <path d="M0,0" fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </a>
  );
}

function LogotypeContainDesktop() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Logotype contain">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pb-[10px] pl-0 pr-[20px] pt-[12px] relative size-full">
          <FFLogoDesktop />
        </div>
      </div>
    </div>
  );
}

function TextLinksDesktop() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0" data-name="Text links">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end justify-end size-full">
        <div className="box-border content-stretch cursor-pointer flex gap-[50px] items-end justify-end pb-[10px] pl-[20px] pr-0 pt-[12px] relative size-full">
          <a className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[4px] pt-0 px-0 relative shrink-0" data-name="Nav Link" href="/project">
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[20px] text-nowrap text-white tracking-[-1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              Work
            </p>
          </a>
          <a className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[4px] pt-0 px-0 relative shrink-0" data-name="Nav Link" href="/about">
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[20px] text-nowrap text-white tracking-[-1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              About
            </p>
          </a>
          <a className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[4px] pt-0 px-0 relative shrink-0" data-name="Nav Link" href="https://figma.com/sites">
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[20px] text-nowrap text-white tracking-[-1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              Contact
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

function LinksContainDesktop() {
  return (
    <div className="basis-0 content-stretch flex gap-[189px] grow h-full items-start justify-end max-w-[615px] min-h-px min-w-px relative shrink-0" data-name="Links contain">
      <TextLinksDesktop />
    </div>
  );
}

function NavHeaderDesktop() {
  return (
    <div className="bg-white relative size-full" data-name="Nav header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[15px] py-0 relative size-full">
          <LogotypeContainDesktop />
          <LinksContainDesktop />
        </div>
      </div>
    </div>
  );
}

function FFLogoTablet() {
  return (
    <a className="block cursor-pointer h-[16.28px] relative shrink-0 w-[37.912px]" data-name="F&F logo" href="/">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 17">
        <g id="F&F logo">
          <path d="M0,0" fill="var(--fill-0, black)" id="Vector" />
          <path d="M0,0" fill="var(--fill-0, black)" id="Vector_2" />
          <path d="M0,0" fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </a>
  );
}

function LogotypeContainTablet() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Logotype contain">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pb-[10px] pl-0 pr-[20px] pt-[12px] relative size-full">
          <FFLogoTablet />
        </div>
      </div>
    </div>
  );
}

function TextLinksTablet() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0" data-name="Text links">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end justify-end size-full">
        <div className="box-border content-stretch cursor-pointer flex gap-[50px] items-end justify-end pb-[10px] pl-[20px] pr-0 pt-[12px] relative size-full">
          <a className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[4px] pt-0 px-0 relative shrink-0" data-name="Nav Link" href="/project">
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[20px] text-nowrap text-white tracking-[-1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              Work
            </p>
          </a>
          <a className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[4px] pt-0 px-0 relative shrink-0" data-name="Nav Link" href="/about">
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[20px] text-nowrap text-white tracking-[-1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              About
            </p>
          </a>
          <a className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[4px] pt-0 px-0 relative shrink-0" data-name="Nav Link" href="https://figma.com/sites">
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[20px] text-nowrap text-white tracking-[-1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
              Contact
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

function LinksContainTablet() {
  return (
    <div className="basis-0 content-stretch flex gap-[189px] grow h-full items-start justify-end max-w-[615px] min-h-px min-w-px relative shrink-0" data-name="Links contain">
      <TextLinksTablet />
    </div>
  );
}

function NavHeaderTablet() {
  return (
    <div className="bg-white relative size-full" data-name="Nav header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[15px] py-0 relative size-full">
          <LogotypeContainTablet />
          <LinksContainTablet />
        </div>
      </div>
    </div>
  );
}

function FFLogoMobile() {
  return (
    <div className="h-[16.28px] relative shrink-0 w-[37.912px]" data-name="F&F logo" role="link" tabIndex="0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 17">
        <g id="F&F logo">
          <path d="M0,0" fill="var(--fill-0, black)" id="Vector" />
          <path d="M0,0" fill="var(--fill-0, black)" id="Vector_2" />
          <path d="M0,0" fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function RightLogoMobile() {
  return (
    <div className="absolute left-[16.69px] size-[15.858px] top-0" data-name="Right logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Right logo">
          <path d="M0,0" fill="var(--fill-0, black)" id="Right logo_2" />
        </g>
      </svg>
    </div>
  );
}

function LogoMobile() {
  return (
    <div className="h-[15.986px] relative shrink-0 w-[32.6px]" data-name="Logo" role="link" tabIndex="0">
      <div className="absolute bottom-[0.69%] left-0 right-[51.44%] top-[0.29%]" data-name="Left Logo">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d="M0,0" fill="var(--fill-0, black)" id="Left Logo" />
        </svg>
      </div>
      <RightLogoMobile />
    </div>
  );
}

function LogotypeContainMobile() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Logotype contain">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch cursor-pointer flex gap-[10px] items-center pb-[10px] pl-0 pr-[20px] pt-[12px] relative size-full">
          <FFLogoMobile />
          <LogoMobile />
        </div>
      </div>
    </div>
  );
}

function NavHeaderMobile() {
  return (
    <div className="bg-white content-stretch flex h-[46px] items-center relative shrink-0 w-full" data-name="Nav header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <LogotypeContainMobile />
      <div className="basis-0 box-border content-stretch flex gap-[10px] grow items-center justify-end min-h-px min-w-px pb-[4px] pt-0 px-0 relative shrink-0" data-name="Nav Link">
        <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[20px] text-nowrap text-white tracking-[-1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Menu
        </p>
      </div>
    </div>
  );
}

function Frame2147237542Mobile() {
  return (
    <div className="content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[26px] items-start leading-none relative shrink-0 text-[20px] text-black tracking-[-1px] w-full">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Work
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        About
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contact
      </p>
    </div>
  );
}

function NavHeaderMobileMobile() {
  return (
    <button className="bg-white cursor-pointer relative size-full" data-name="Nav header mobile">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[15px] items-start pb-[15px] pt-0 px-[15px] relative size-full">
          <NavHeaderMobile />
          <Frame2147237542Mobile />
        </div>
      </div>
    </button>
  );
}

function NavHeader() {
  const { width } = useActiveBreakpoint();
  if (width < 800) {
    return <NavHeaderMobileMobile />;
  }
  if (width < 1280) {
    return <NavHeaderTablet />;
  }
  return <NavHeaderDesktop />;
}

// NavHeader 컴포넌트는 위에 정의됨

function IntroContentDesktop() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Intro content">
      <p className="basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-none max-w-[1080px] min-h-px min-w-px relative shrink-0 text-[64px] text-black tracking-[-3.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        No Doubt. <br /> Just Do It.
      </p>
    </div>
  );
}

function IntroSectionDesktop() {
  return (
    <div className="relative size-full" data-name="Intro section">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start max-w-inherit pb-[120px] pt-[15px] px-[15px] relative size-full">
          <IntroContentDesktop />
        </div>
      </div>
    </div>
  );
}

function IntroContentTablet() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Intro content">
      <p className="basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-none max-w-[1080px] min-h-px min-w-px relative shrink-0 text-[64px] text-black tracking-[-3.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
      No Doubt. <br /> Just Do It.
      </p>
    </div>
  );
}

function IntroSectionTablet() {
  return (
    <div className="relative size-full" data-name="Intro section">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start max-w-inherit pb-[56px] pt-[15px] px-[15px] relative size-full">
          <IntroContentTablet />
        </div>
      </div>
    </div>
  );
}

function IntroContentMobile() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Intro content">
      <p className="basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-none min-h-px min-w-px relative shrink-0 text-[64px] text-black tracking-[-3.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        No Doubt. <br /> Just Do It.
      </p>
    </div>
  );
}

function IntroSectionMobile() {
  return (
    <div className="relative size-full" data-name="Intro section">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start max-w-inherit pb-[48px] pt-[80px] px-[15px] relative size-full">
          <IntroContentMobile />
        </div>
      </div>
    </div>
  );
}

function IntroSection() {
  const { width } = useActiveBreakpoint();
  if (width < 800) {
    return <IntroSectionMobile />;
  }
  if (width < 1280) {
    return <IntroSectionTablet />;
  }
  return <IntroSectionDesktop />;
}

// NavHeader와 IntroSection은 전역으로 사용 가능

function BrandingListDesktop() {
  return (
    <div className="relative shrink-0 w-full" data-name="Branding list">
      <div className="max-w-inherit min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[20px] items-start max-w-inherit min-w-inherit pl-0 pr-0 py-0 relative w-full">
          <p className="leading-[1.1] relative shrink-0 text-black text-[32px] text-nowrap tracking-[-0.48px] whitespace-pre font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
            Strategic Planning
          </p>
          <div className="leading-[1.21] min-w-full relative shrink-0 text-[16px] text-[#767676] tracking-[-0.7px] w-full flex flex-col gap-y-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>Status Analysis</span>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Goal Setting</span>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Resource Planning</span>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Performance Review</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProblemSolvingListDesktop() {
  return (
    <div className="relative shrink-0 w-full" data-name="Problem solving list">
      <div className="max-w-inherit min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[20px] items-start max-w-inherit min-w-inherit pl-0 pr-0 py-0 relative w-full">
          <p className="leading-[1.1] relative shrink-0 text-black text-[32px] text-nowrap tracking-[-0.48px] whitespace-pre font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
            Problem Solving
          </p>
          <div className="leading-[1.21] min-w-full relative shrink-0 text-[16px] text-[#767676] tracking-[-0.7px] w-full flex flex-col gap-y-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>Problem Definition</span>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Solution Design</span>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Implementation</span>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Result Verification</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DataDrivenDecisionMakingListDesktop() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data-driven decision making list">
      <div className="max-w-inherit min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[20px] items-start max-w-inherit min-w-inherit pl-0 pr-0 py-0 relative w-full">
          <p className="leading-[1.1] relative shrink-0 text-black text-[32px] text-nowrap tracking-[-0.48px] whitespace-pre font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
            Data-Driven Decisions
          </p>
          <div className="leading-[1.21] min-w-full relative shrink-0 text-[16px] text-[#767676] tracking-[-0.7px] w-full flex flex-col gap-y-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>KPI Setup</span>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Data Analysis</span>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Hypothesis Testing</span>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Action Planning</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function HRManagementListDesktop() {
  return (
    <div className="relative shrink-0 w-full" data-name="HR Management list">
      <div className="max-w-inherit min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[20px] items-start max-w-inherit min-w-inherit pl-0 pr-0 py-0 relative w-full">
          <p className="leading-[1.1] relative shrink-0 text-black text-[32px] text-nowrap tracking-[-0.48px] whitespace-pre font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
            HR Management
          </p>
          <div className="leading-[1.21] min-w-full relative shrink-0 text-[16px] text-[#767676] tracking-[-0.7px] w-full flex flex-col gap-y-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>Organizational Design</span>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Talent Development</span>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Performance Mgmt</span>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Culture Building</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCoordinationListDesktop() {
  return (
    <div className="relative shrink-0 w-full" data-name="Project Coordination list">
      <div className="max-w-inherit min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[20px] items-start max-w-inherit min-w-inherit pl-0 pr-0 py-0 relative w-full">
          <p className="leading-[1.1] relative shrink-0 text-black text-[32px] text-nowrap tracking-[-0.48px] whitespace-pre font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
            Project Coordination
          </p>
          <div className="leading-[1.21] min-w-full relative shrink-0 text-[16px] text-[#767676] tracking-[-0.7px] w-full flex flex-col gap-y-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>Timeline Control</span>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Stakeholder Mgmt</span>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Resource Control</span>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Risk Mitigation</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkContainDesktop() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Link contain">
      <a className="box-border content-stretch cursor-pointer flex font-['Instrument_Sans:Medium',sans-serif] font-medium gap-[3px] items-center leading-[1.1] p-0 relative shrink-0 text-[#767676] text-[16px] text-nowrap tracking-[-0.48px] whitespace-pre" data-name="Text link" href="https://figma.com/sites">
        <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          See Work
        </p>
        <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          →
        </p>
      </a>
    </div>
  );
}

function StatsBodyDesktop() {
  return (
    <div className="basis-0 content-start grid grid-cols-3 gap-y-[32px] grow items-start max-w-[1200px] min-h-px min-w-px relative shrink-0" style={{ columnGap: '3px' }} data-name="Stats body">
      <BrandingListDesktop />
      <ProblemSolvingListDesktop />
      <DataDrivenDecisionMakingListDesktop />
      <HRManagementListDesktop />
      <ProjectCoordinationListDesktop />
    </div>
  );
}

function StatsContentDesktop() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Stats content">
      <p className="basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-none max-w-[633px] min-h-px min-w-px relative shrink-0 text-[64px] text-black tracking-[-3.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Core Competencies
      </p>
      <StatsBodyDesktop />
    </div>
  );
}

function StatsSectionDesktop() {
  return (
    <div className="relative size-full" data-name="Stats section">
      <div className="flex flex-col items-center max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-center max-w-inherit pb-[100px] pt-[67px] px-[15px] relative size-full">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1250 1">
                <path d="M0 0.5H1250" id="Divider" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
          <StatsContentDesktop />
        </div>
      </div>
    </div>
  );
}

// Tech & Tools 아이콘 데이터
const techTools = [
  // Row 1
  { name: 'SQL', icon: 'https://github.com/user-attachments/assets/db840114-5b75-49e8-9644-e91342b64f27' },
  { name: 'MySQL', icon: 'https://github.com/user-attachments/assets/1c1f5be7-3193-4f10-a1ae-8742d3cc85bb' },
  { name: 'GA', icon: 'https://github.com/user-attachments/assets/0d22a15c-01d3-4cca-8e58-77185d6b3b5b' },
  { name: 'Google Sheets', icon: 'https://github.com/user-attachments/assets/8c8d1bb5-b450-4c52-8d51-c6bf686afd83' },
  // Row 2
  { name: 'HTML', icon: 'https://github.com/user-attachments/assets/9f25a30f-5bf8-4521-a567-9fa448256e1b' },
  { name: 'CSS', icon: 'https://github.com/user-attachments/assets/f64f6758-bbcb-424e-819a-41011d3bd95c' },
  { name: 'JavaScript', icon: 'https://github.com/user-attachments/assets/a7fe848e-3b17-4c29-8228-a2513afd83eb' },
  { name: 'Python', icon: 'https://github.com/user-attachments/assets/a26c4591-c527-480b-9ba3-0d1679b46915' },
  // Row 3
  { name: 'Notion', icon: 'https://github.com/user-attachments/assets/43d27059-dd13-45e1-adf0-3445ef0a8448' },
  { name: 'Figma', icon: 'https://github.com/user-attachments/assets/4b600ecd-49b1-408e-ad26-55f1d0c8abda' },
  { name: 'GPT', icon: 'https://github.com/user-attachments/assets/3010b613-94e7-453d-8b1a-d089fe362e61' },
  { name: 'Claude', icon: 'https://github.com/user-attachments/assets/a601df5c-2730-4706-8ff8-68b3b8e2892c' },
  // Row 4
  { name: 'Gemini', icon: 'https://github.com/user-attachments/assets/19ea2a49-f174-4b76-99a8-6e5ba28941dc' },
  { name: 'CURSOR', icon: 'https://github.com/user-attachments/assets/0d08825c-ff95-432f-acd0-9c946567c622' },
  { name: 'Org Design & Mgmt', icon: 'https://github.com/user-attachments/assets/b9ebc0c1-d61b-4735-8b13-8fe0f834ff54' },
  { name: 'OA', icon: 'https://github.com/user-attachments/assets/78e1a74b-f896-453d-ac7f-c0ec82344cf4' },
];

function TechToolIcon({ name, icon }) {
  return (
    <div className="flex flex-col items-center gap-[8px]" data-name={`Tech tool: ${name}`}>
      <div className="w-[50px] h-[50px] flex items-center justify-center">
        <img 
          src={icon} 
          alt={name} 
          className="w-full h-full object-contain"
          onError={(e) => {
            // 아이콘 로드 실패 시 대체 텍스트 표시
            e.target.style.display = 'none';
            e.target.parentElement.innerHTML = `<span class="text-2xl">${name.charAt(0)}</span>`;
          }}
        />
      </div>
      <p className="text-[14px] text-black text-center font-['Instrument_Sans:Regular',sans-serif] font-normal font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
        {name}
      </p>
    </div>
  );
}

function NewBodyDesktop() {
  return (
    <div className="basis-0 content-start grid grid-cols-4 gap-x-[24px] gap-y-[32px] grow items-start max-w-[1200px] min-h-px min-w-px relative shrink-0" data-name="New body">
      {techTools.map((tool, index) => (
        <TechToolIcon key={index} name={tool.name} icon={tool.icon} />
      ))}
    </div>
  );
}

function NewContentDesktop() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="New content">
      <p className="basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-none max-w-[633px] min-h-px min-w-px relative shrink-0 text-[64px] text-black tracking-[-3.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tech & Tools
      </p>
      <NewBodyDesktop />
    </div>
  );
}

function NewSectionDesktop() {
  return (
    <div className="relative size-full" data-name="Tech & Tools">
      <div className="flex flex-col items-center max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-center max-w-inherit pb-[100px] pt-[67px] px-[15px] relative size-full">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1250 1">
                <path d="M0 0.5H1250" id="Divider" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
          <NewContentDesktop />
        </div>
      </div>
    </div>
  );
}

function BrandingListTablet() {
  return (
    <div className="basis-0 grow max-w-[300px] min-h-px min-w-[250px] relative shrink-0" data-name="Branding list">
      <div className="max-w-inherit min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[20px] items-start max-w-inherit min-w-inherit pl-0 pr-[20px] py-0 relative w-full">
          <p className="leading-[1.1] relative shrink-0 text-black text-[32px] text-nowrap tracking-[-0.48px] whitespace-pre font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
          Strategic Planning
          </p>
          <div className="leading-[1.21] min-w-full relative shrink-0 text-[14px] text-[#767676] tracking-[-0.7px] w-full flex flex-col gap-y-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Current State Analysis</span>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Vision & Goal Setting</span>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Action Plan & Resource Allocation</span>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Performance Monitoring & Review</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProblemSolvingListTablet() {
  return (
    <div className="basis-0 grow max-w-[300px] min-h-px min-w-[250px] relative shrink-0 mt-[32px]" data-name="Problem solving list">
      <div className="max-w-inherit min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[20px] items-start max-w-inherit min-w-inherit pl-0 pr-[20px] py-0 relative w-full">
          <p className="leading-[1.1] relative shrink-0 text-black text-[32px] text-nowrap tracking-[-0.48px] whitespace-pre font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
          Problem Solving
          </p>
          <div className="leading-[1.21] min-w-full relative shrink-0 text-[14px] text-[#767676] tracking-[-0.7px] w-full flex flex-col gap-y-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Define & Analyze</span>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Ideation & Solution Development</span>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Execution & Implementation</span>
            <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Verification & Sustainment</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkContainTablet() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start min-w-[300px] relative shrink-0 w-[300px]" data-name="Link contain">
      <a className="box-border content-stretch cursor-pointer flex font-['Instrument_Sans:Medium',sans-serif] font-medium gap-[3px] items-center leading-[1.1] p-0 relative shrink-0 text-[#767676] text-[16px] text-nowrap tracking-[-0.48px] whitespace-pre" data-name="Text link" href="https://figma.com/sites">
        <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          See Work
        </p>
        <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          →
        </p>
      </a>
    </div>
  );
}

function StatsBodyTablet() {
  return (
    <div className="basis-0 content-start flex flex-wrap gap-0 grow items-start max-w-[633px] min-h-px min-w-px relative shrink-0" data-name="Stats body">
      <BrandingListTablet />
      <ProblemSolvingListTablet />
    </div>
  );
}

function StatsContentTablet() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Stats content">
      <p className="basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-none max-w-[633px] min-h-px min-w-px relative shrink-0 text-[64px] text-black tracking-[-3.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Our Services
      </p>
      <StatsBodyTablet />
    </div>
  );
}

function StatsSectionTablet() {
  return (
    <div className="relative size-full" data-name="Stats section">
      <div className="flex flex-col items-center max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-center max-w-inherit pb-[100px] pt-[67px] px-[15px] relative size-full">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 770 1">
                <path d="M0 0.5H770" id="Divider" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
          <StatsContentTablet />
        </div>
      </div>
    </div>
  );
}

function BrandingListMobile() {
  return (
    <div className="content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[20px] items-start relative shrink-0 w-full" data-name="Branding list">
      <p className="leading-[1.1] relative shrink-0 text-black text-[32px] tracking-[-0.48px] w-full font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
        Strategic Planning
      </p>
      <div className="leading-[1.21] relative shrink-0 text-[14px] text-[#767676] tracking-[-0.7px] w-full flex flex-col gap-y-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Current State Analysis</span>
        <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Vision & Goal Setting</span>
        <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Action Plan & Resource Allocation</span>
        <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Performance Monitoring & Review</span>
      </div>
    </div>
  );
}

function ProblemSolvingListMobile() {
  return (
    <div className="content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[20px] items-start relative shrink-0 w-full mt-[32px]" data-name="Problem solving list">
      <p className="leading-[1.1] relative shrink-0 text-black text-[32px] tracking-[-0.48px] w-full font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
        Problem Solving
      </p>
      <div className="leading-[1.21] relative shrink-0 text-[14px] text-[#767676] tracking-[-0.7px] w-full flex flex-col gap-y-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Define & Analyze</span>
        <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Ideation & Solution Development</span>
        <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Execution & Implementation</span>
        <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal">Verification & Sustainment</span>
      </div>
    </div>
  );
}

function LinkContainMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start min-w-[300px] relative shrink-0 w-full" data-name="Link contain">
      <a className="box-border content-stretch cursor-pointer flex font-['Instrument_Sans:Medium',sans-serif] font-medium gap-[3px] items-center leading-[1.1] p-0 relative shrink-0 text-[#767676] text-[16px] tracking-[-0.48px] w-full" data-name="Text link" href="https://figma.com/sites">
        <p className="basis-0 grow min-h-px min-w-px relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          See Work
        </p>
        <p className="basis-0 grow min-h-px min-w-px relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          →
        </p>
      </a>
    </div>
  );
}

function StatsBodyMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[633px] relative shrink-0 w-full" data-name="Stats body">
      <BrandingListMobile />
      <ProblemSolvingListMobile />
    </div>
  );
}

function StatsContentMobile() {
  return (
    <div className="relative shrink-0 w-full" data-name="Stats content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[16px] py-0 relative w-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none max-w-[633px] relative shrink-0 text-[64px] text-black tracking-[-3.2px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Our Services
          </p>
          <StatsBodyMobile />
        </div>
      </div>
    </div>
  );
}

function StatsSectionMobile() {
  return (
    <div className="relative size-full" data-name="Stats section">
      <div className="flex flex-col items-center max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-center max-w-inherit pb-[100px] pt-[67px] px-[15px] relative size-full">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 1">
                <path d="M0 0.5H345" id="Divider" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
          <StatsContentMobile />
        </div>
      </div>
    </div>
  );
}

function StatsSection() {
  const { width } = useActiveBreakpoint();
  if (width < 800) {
    return <StatsSectionMobile />;
  }
  if (width < 1280) {
    return <StatsSectionTablet />;
  }
  return <StatsSectionDesktop />;
}

// StatsSection은 전역으로 사용 가능

function StatContentDesktop() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Stat content">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[40px] items-start pl-0 pr-[16px] py-[16px] relative size-full text-black">
          <p className="leading-[1.1] relative shrink-0 text-[105px] tracking-[-5.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            1M+
          </p>
          <p className="leading-[1.21] relative shrink-0 text-[20px] tracking-[-1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Users and visitors interacted with our websites
          </p>
        </div>
      </div>
    </div>
  );
}

function StatContentDesktop1() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[40px] grow items-start min-h-px min-w-px relative shrink-0 text-black" data-name="Stat content">
      <p className="leading-[1.1] relative shrink-0 text-[105px] tracking-[-5.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        36
      </p>
      <p className="leading-[1.21] relative shrink-0 text-[20px] tracking-[-1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Active campaigns for companies and brands
      </p>
    </div>
  );
}

function Stat2Desktop() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Stat 2">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-start flex flex-wrap gap-[30px] items-start pl-0 pr-[16px] py-[16px] relative size-full">
          <StatContentDesktop1 />
        </div>
      </div>
    </div>
  );
}

function StatContentDesktop2() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[40px] grow items-start min-h-px min-w-px relative shrink-0 text-black" data-name="Stat content">
      <p className="leading-[1.1] relative shrink-0 text-[105px] tracking-[-5.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        100+
      </p>
      <p className="leading-[1.21] relative shrink-0 text-[20px] tracking-[-1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Different clients have sought our expertise
      </p>
    </div>
  );
}

function Stat3Desktop() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Stat 3">
      <div className="size-full">
        <div className="box-border content-start flex flex-wrap gap-[30px] items-start pl-0 pr-[16px] py-[16px] relative size-full">
          <StatContentDesktop2 />
        </div>
      </div>
    </div>
  );
}

function StatsNumbersDesktop() {
  return (
    <div className="relative size-full" data-name="Stats content">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[20px] items-start px-[15px] py-[32px] relative size-full">
          <StatContentDesktop />
          <Stat2Desktop />
          <Stat3Desktop />
        </div>
      </div>
    </div>
  );
}

function StatContentTablet() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Stat content">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[40px] items-start pl-0 pr-[16px] py-[16px] relative size-full text-black">
          <p className="leading-[1.1] relative shrink-0 text-[105px] tracking-[-5.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            1M+
          </p>
          <p className="leading-[1.21] relative shrink-0 text-[20px] tracking-[-1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Users and visitors interacted with our websites
          </p>
        </div>
      </div>
    </div>
  );
}

function StatContentTablet1() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[40px] grow items-start min-h-px min-w-px relative shrink-0 text-black" data-name="Stat content">
      <p className="leading-[1.1] relative shrink-0 text-[105px] tracking-[-5.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        36
      </p>
      <p className="leading-[1.21] relative shrink-0 text-[20px] tracking-[-1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Active campaigns for companies and brands
      </p>
    </div>
  );
}

function Stat2Tablet() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Stat 2">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-start flex flex-wrap gap-[30px] items-start pl-0 pr-[16px] py-[16px] relative size-full">
          <StatContentTablet1 />
        </div>
      </div>
    </div>
  );
}

function StatContentTablet2() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[40px] grow items-start min-h-px min-w-px relative shrink-0 text-black" data-name="Stat content">
      <p className="leading-[1.1] relative shrink-0 text-[105px] tracking-[-5.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        100+
      </p>
      <p className="leading-[1.21] relative shrink-0 text-[20px] tracking-[-1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Different clients have sought our expertise
      </p>
    </div>
  );
}

function Stat3Tablet() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Stat 3">
      <div className="size-full">
        <div className="box-border content-start flex flex-wrap gap-[30px] items-start pl-0 pr-[16px] py-[16px] relative size-full">
          <StatContentTablet2 />
        </div>
      </div>
    </div>
  );
}

function StatsNumbersTablet() {
  return (
    <div className="relative size-full" data-name="Stats content">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[20px] items-start px-[15px] py-[32px] relative size-full">
          <StatContentTablet />
          <Stat2Tablet />
          <Stat3Tablet />
        </div>
      </div>
    </div>
  );
}

function StatContentMobile() {
  return (
    <div className="relative shrink-0 w-full" data-name="Stat content">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[40px] items-start pl-0 pr-[16px] py-[16px] relative text-black w-full">
          <p className="leading-[1.1] relative shrink-0 text-[105px] tracking-[-5.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            1M+
          </p>
          <p className="leading-[1.21] relative shrink-0 text-[20px] tracking-[-1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Users and visitors interacted with our websites
          </p>
        </div>
      </div>
    </div>
  );
}

function StatContentMobile1() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[40px] grow items-start min-h-px min-w-px relative shrink-0 text-black" data-name="Stat content">
      <p className="leading-[1.1] relative shrink-0 text-[105px] tracking-[-5.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        36
      </p>
      <p className="leading-[1.21] relative shrink-0 text-[20px] tracking-[-1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Active campaigns for companies and brands
      </p>
    </div>
  );
}

function Stat2Mobile() {
  return (
    <div className="relative shrink-0 w-full" data-name="Stat 2">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-start flex flex-wrap gap-[30px] items-start pl-0 pr-[16px] py-[16px] relative w-full">
          <StatContentMobile1 />
        </div>
      </div>
    </div>
  );
}

function StatContentMobile2() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[40px] grow items-start min-h-px min-w-px relative shrink-0 text-black" data-name="Stat content">
      <p className="leading-[1.1] relative shrink-0 text-[105px] tracking-[-5.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        100+
      </p>
      <p className="leading-[1.21] relative shrink-0 text-[20px] tracking-[-1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Different clients have sought our expertise
      </p>
    </div>
  );
}

function Stat3Mobile() {
  return (
    <div className="relative shrink-0 w-full" data-name="Stat 3">
      <div className="size-full">
        <div className="box-border content-start flex flex-wrap gap-[30px] items-start pb-0 pl-0 pr-[16px] pt-[16px] relative w-full">
          <StatContentMobile2 />
        </div>
      </div>
    </div>
  );
}

function StatsNumbersMobile() {
  return (
    <div className="relative size-full" data-name="Stats content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start pb-[16px] pt-[32px] px-[15px] relative size-full">
          <StatContentMobile />
          <Stat2Mobile />
          <Stat3Mobile />
        </div>
      </div>
    </div>
  );
}

function StatsContent() {
  const { width } = useActiveBreakpoint();
  if (width < 800) {
    return <StatsNumbersMobile />;
  }
  if (width < 1280) {
    return <StatsNumbersTablet />;
  }
  return <StatsNumbersDesktop />;
}

// StatsContent는 전역으로 사용 가능

function Award1Desktop() {
  return (
    <a className="box-border content-stretch cursor-pointer flex font-['Instrument_Sans:Regular',sans-serif] font-normal items-center justify-between leading-[1.21] p-0 relative shrink-0 text-[20px] tracking-[-1px] w-full" data-name="Award 1" href="https://figma.com/sites">
      <p className="basis-0 grow max-w-[305px] min-h-px min-w-px relative shrink-0 text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        Outstanding Logo Design
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        2025
      </p>
      <p className="relative shrink-0 text-black text-nowrap text-right whitespace-pre" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">
        →
      </p>
    </a>
  );
}

function Award2Desktop() {
  return (
    <a className="box-border content-stretch cursor-pointer flex font-['Instrument_Sans:Regular',sans-serif] font-normal items-center justify-between leading-[1.21] p-0 relative shrink-0 text-[20px] tracking-[-1px] w-full" data-name="Award 2" href="https://figma.com/sites">
      <p className="relative shrink-0 text-black w-[305px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Most Memorable Visual Identity
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        2025
      </p>
      <p className="relative shrink-0 text-black text-nowrap text-right whitespace-pre" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">
        →
      </p>
    </a>
  );
}

function Award3Desktop() {
  return (
    <a className="box-border content-stretch cursor-pointer flex font-['Instrument_Sans:Regular',sans-serif] font-normal items-center justify-between leading-[1.21] p-0 relative shrink-0 text-[20px] tracking-[-1px] w-full" data-name="Award 3" href="https://figma.com/sites">
      <p className="basis-0 grow max-w-[305px] min-h-px min-w-px relative shrink-0 text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        Best Use of Storytelling in Branding
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        2024
      </p>
      <p className="relative shrink-0 text-black text-nowrap text-right whitespace-pre" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">
        →
      </p>
    </a>
  );
}

function Award4Desktop() {
  return (
    <a className="box-border content-stretch cursor-pointer flex font-['Instrument_Sans:Regular',sans-serif] font-normal items-center justify-between leading-[1.21] p-0 relative shrink-0 text-[20px] tracking-[-1px] w-full" data-name="Award 4" href="https://figma.com/sites">
      <p className="relative shrink-0 text-black w-[305px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Innovation in Branding
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        2024
      </p>
      <p className="relative shrink-0 text-black text-nowrap text-right whitespace-pre" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">
        →
      </p>
    </a>
  );
}

function Award5Desktop() {
  return (
    <a className="box-border content-stretch cursor-pointer flex font-['Instrument_Sans:Regular',sans-serif] font-normal items-center justify-between leading-[1.21] p-0 relative shrink-0 text-[20px] tracking-[-1px] w-full" data-name="Award 5" href="https://figma.com/sites">
      <p className="basis-0 grow max-w-[305px] min-h-px min-w-px relative shrink-0 text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        Digital Branding Mastery
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        2023
      </p>
      <p className="relative shrink-0 text-black text-nowrap text-right whitespace-pre" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">
        →
      </p>
    </a>
  );
}

function AwardsListDesktop() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[25px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Awards list">
      <Award1Desktop />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 625 1">
            <path d="M0 0.5H625" id="Divider" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <Award2Desktop />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 625 1">
            <path d="M0 0.5H625" id="Divider" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <Award3Desktop />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 625 1">
            <path d="M0 0.5H625" id="Divider" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <Award4Desktop />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 625 1">
            <path d="M0 0.5H625" id="Divider" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <Award5Desktop />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 625 1">
            <path d="M0 0.5H625" id="Divider" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AwardsContentDesktop() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Awards content">
      <p className="basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-none max-w-[633px] min-h-px min-w-px relative shrink-0 text-[64px] text-black tracking-[-3.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Awards
      </p>
      <AwardsListDesktop />
    </div>
  );
}

function AwardsSectionDesktop() {
  return (
    <div className="relative size-full" data-name="Awards section">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start max-w-inherit pb-[100px] pt-0 px-[15px] relative size-full">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1250 1">
                <path d="M0 0.5H1250" id="Divider" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
          <AwardsContentDesktop />
        </div>
      </div>
    </div>
  );
}

function Award1Tablet() {
  return (
    <a className="box-border content-stretch cursor-pointer flex font-['Instrument_Sans:Regular',sans-serif] font-normal items-center justify-between leading-[1.21] p-0 relative shrink-0 text-[20px] tracking-[-1px] w-full" data-name="Award 1" href="https://figma.com/sites">
      <p className="basis-0 grow max-w-[305px] min-h-px min-w-px relative shrink-0 text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        Outstanding Logo Design
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        2025
      </p>
      <p className="relative shrink-0 text-black text-nowrap text-right whitespace-pre" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">
        →
      </p>
    </a>
  );
}

function Award2Tablet() {
  return (
    <a className="box-border content-stretch cursor-pointer flex font-['Instrument_Sans:Regular',sans-serif] font-normal items-center justify-between leading-[1.21] p-0 relative shrink-0 text-[20px] tracking-[-1px] w-full" data-name="Award 2" href="https://figma.com/sites">
      <p className="relative shrink-0 text-black w-[305px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Most Memorable Visual Identity
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        2025
      </p>
      <p className="relative shrink-0 text-black text-nowrap text-right whitespace-pre" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">
        →
      </p>
    </a>
  );
}

function Award3Tablet() {
  return (
    <a className="box-border content-stretch cursor-pointer flex font-['Instrument_Sans:Regular',sans-serif] font-normal items-center justify-between leading-[1.21] p-0 relative shrink-0 text-[20px] tracking-[-1px] w-full" data-name="Award 3" href="https://figma.com/sites">
      <p className="basis-0 grow max-w-[305px] min-h-px min-w-px relative shrink-0 text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        Best Use of Storytelling in Branding
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        2024
      </p>
      <p className="relative shrink-0 text-black text-nowrap text-right whitespace-pre" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">
        →
      </p>
    </a>
  );
}

function Award4Tablet() {
  return (
    <a className="box-border content-stretch cursor-pointer flex font-['Instrument_Sans:Regular',sans-serif] font-normal items-center justify-between leading-[1.21] p-0 relative shrink-0 text-[20px] tracking-[-1px] w-full" data-name="Award 4" href="https://figma.com/sites">
      <p className="relative shrink-0 text-black w-[305px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Innovation in Branding
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        2024
      </p>
      <p className="relative shrink-0 text-black text-nowrap text-right whitespace-pre" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">
        →
      </p>
    </a>
  );
}

function Award5Tablet() {
  return (
    <a className="box-border content-stretch cursor-pointer flex font-['Instrument_Sans:Regular',sans-serif] font-normal items-center justify-between leading-[1.21] p-0 relative shrink-0 text-[20px] tracking-[-1px] w-full" data-name="Award 5" href="https://figma.com/sites">
      <p className="basis-0 grow max-w-[305px] min-h-px min-w-px relative shrink-0 text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        Digital Branding Mastery
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        2023
      </p>
      <p className="relative shrink-0 text-black text-nowrap text-right whitespace-pre" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">
        →
      </p>
    </a>
  );
}

function AwardsListTablet() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[25px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Awards list">
      <Award1Tablet />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 385 1">
            <path d="M0 0.5H385" id="Divider" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <Award2Tablet />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 385 1">
            <path d="M0 0.5H385" id="Divider" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <Award3Tablet />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 385 1">
            <path d="M0 0.5H385" id="Divider" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <Award4Tablet />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 385 1">
            <path d="M0 0.5H385" id="Divider" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <Award5Tablet />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 385 1">
            <path d="M0 0.5H385" id="Divider" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AwardsContentTablet() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Awards content">
      <p className="basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-none max-w-[633px] min-h-px min-w-px relative shrink-0 text-[64px] text-black tracking-[-3.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Awards
      </p>
      <AwardsListTablet />
    </div>
  );
}

function AwardsSectionTablet() {
  return (
    <div className="relative size-full" data-name="Awards section">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start max-w-inherit pb-[100px] pt-0 px-[15px] relative size-full">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 770 1">
                <path d="M0 0.5H770" id="Divider" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
          <AwardsContentTablet />
        </div>
      </div>
    </div>
  );
}

function Award1Mobile() {
  return (
    <a className="box-border content-stretch cursor-pointer flex font-['Instrument_Sans:Regular',sans-serif] font-normal items-start justify-between leading-[1.21] p-0 relative shrink-0 text-[20px] tracking-[-1px] w-full" data-name="Award 1" href="https://figma.com/sites">
      <p className="max-w-[305px] relative shrink-0 text-black w-[200px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Outstanding Logo Design
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        2025
      </p>
      <p className="relative shrink-0 text-black text-nowrap text-right whitespace-pre" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">
        →
      </p>
    </a>
  );
}

function Award2Mobile() {
  return (
    <a className="box-border content-stretch cursor-pointer flex font-['Instrument_Sans:Regular',sans-serif] font-normal items-start justify-between leading-[1.21] p-0 relative shrink-0 text-[20px] tracking-[-1px] w-full" data-name="Award 2" href="https://figma.com/sites">
      <p className="relative shrink-0 text-black w-[200px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Most Memorable Visual Identity
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        2025
      </p>
      <p className="relative shrink-0 text-black text-nowrap text-right whitespace-pre" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">
        →
      </p>
    </a>
  );
}

function Award3Mobile() {
  return (
    <a className="box-border content-stretch cursor-pointer flex font-['Instrument_Sans:Regular',sans-serif] font-normal items-start justify-between leading-[1.21] p-0 relative shrink-0 text-[20px] tracking-[-1px] w-full" data-name="Award 3" href="https://figma.com/sites">
      <p className="max-w-[305px] relative shrink-0 text-black w-[200px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Best Use of Storytelling in Branding
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        2024
      </p>
      <p className="relative shrink-0 text-black text-nowrap text-right whitespace-pre" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">
        →
      </p>
    </a>
  );
}

function Award4Mobile() {
  return (
    <a className="box-border content-stretch cursor-pointer flex font-['Instrument_Sans:Regular',sans-serif] font-normal items-start justify-between leading-[1.21] p-0 relative shrink-0 text-[20px] tracking-[-1px] w-full" data-name="Award 4" href="https://figma.com/sites">
      <p className="relative shrink-0 text-black w-[200px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Innovation in Branding
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        2024
      </p>
      <p className="relative shrink-0 text-black text-nowrap text-right whitespace-pre" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">
        →
      </p>
    </a>
  );
}

function Award5Mobile() {
  return (
    <a className="box-border content-stretch cursor-pointer flex font-['Instrument_Sans:Regular',sans-serif] font-normal items-start justify-between leading-[1.21] p-0 relative shrink-0 text-[20px] tracking-[-1px] w-full" data-name="Award 5" href="https://figma.com/sites">
      <p className="max-w-[305px] relative shrink-0 text-black w-[200px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Digital Branding Mastery
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        2023
      </p>
      <p className="relative shrink-0 text-black text-nowrap text-right whitespace-pre" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">
        →
      </p>
    </a>
  );
}

function AwardsListMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full" data-name="Awards list">
      <Award1Mobile />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 1">
            <path d="M0 0.5H345" id="Divider" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <Award2Mobile />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 1">
            <path d="M0 0.5H345" id="Divider" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <Award3Mobile />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 1">
            <path d="M0 0.5H345" id="Divider" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <Award4Mobile />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 1">
            <path d="M0 0.5H345" id="Divider" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <Award5Mobile />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 1">
            <path d="M0 0.5H345" id="Divider" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AwardsContentMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0 w-full" data-name="Awards content">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[64px] text-black tracking-[-3.2px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Awards
      </p>
      <AwardsListMobile />
    </div>
  );
}

function AwardsSectionMobile() {
  return (
    <div className="relative size-full" data-name="Awards section">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start pb-[100px] pt-0 px-[15px] relative size-full">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 1">
                <path d="M0 0.5H345" id="Divider" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
          <AwardsContentMobile />
        </div>
      </div>
    </div>
  );
}

function AwardsSection() {
  const { width } = useActiveBreakpoint();
  if (width < 800) {
    return <AwardsSectionMobile />;
  }
  if (width < 1280) {
    return <AwardsSectionTablet />;
  }
  return <AwardsSectionDesktop />;
}

// AwardsSection은 전역으로 사용 가능

// 이미지 파일은 나중에 추가 예정
// import imgImage from "figma:asset/223a9a2482f76da70c716fee2b766584ab30b6fb.png";
// import imgImage1 from "figma:asset/259df5192944c24bee12cd5e45fd54652f1022bb.png";
// useActiveBreakpoint는 이미 상단에서 import됨

// 임시 이미지 경로
const imgImage = "https://via.placeholder.com/305x301";
const imgImage1 = "https://via.placeholder.com/305x301";

function ImageDesktop() {
  return (
    <div className="aspect-[305/301] relative shrink-0 w-full" data-name="Image">
      <img alt="Portrait of a man with brown hair and glasses on a flat gray background." className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function DescriptionDesktop() {
  return (
    <div className="content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[9px] items-start leading-[1.21] relative shrink-0 text-[20px] tracking-[-1px] w-[209px]" data-name="Description">
      <p className="relative shrink-0 text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Alex L.
      </p>
      <p className="max-w-[250px] relative shrink-0 text-[#767676] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Founder and Creative Director
      </p>
    </div>
  );
}

function Headshot1Desktop() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[17px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Headshot 1">
      <ImageDesktop />
      <DescriptionDesktop />
    </div>
  );
}

function ImageDesktop1() {
  return (
    <div className="aspect-[305/301] relative shrink-0 w-full" data-name="Image">
      <img alt="Portrait of a woman with brown hair on a flat gray background." className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function DescriptionDesktop1() {
  return (
    <div className="content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[9px] items-start leading-[1.21] relative shrink-0 text-[20px] tracking-[-1px] w-full" data-name="Description">
      <p className="relative shrink-0 text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cathy G.
      </p>
      <p className="max-w-[250px] relative shrink-0 text-[#767676] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Managing Director and Partner
      </p>
    </div>
  );
}

function Headshot2Desktop() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[17px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Headshot 2">
      <ImageDesktop1 />
      <DescriptionDesktop1 />
    </div>
  );
}

function HeadshotsContainerDesktop() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Headshots container">
      <Headshot1Desktop />
      <Headshot2Desktop />
    </div>
  );
}

function Person1Desktop() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[9px] grow items-start leading-[1.21] min-h-px min-w-px relative shrink-0 text-[20px] tracking-[-1px]" data-name="Person 1">
      <p className="min-w-full relative shrink-0 text-black w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jeremy T.
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Senior Designer
      </p>
    </div>
  );
}

function Person2Desktop() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[9px] grow items-start leading-[1.21] min-h-px min-w-px relative shrink-0 text-[20px] tracking-[-1px]" data-name="Person 2">
      <p className="min-w-full relative shrink-0 text-black w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mariana V.
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Senior Designer
      </p>
    </div>
  );
}

function Row1Desktop() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Row 1">
      <Person1Desktop />
      <Person2Desktop />
    </div>
  );
}

function Person1Desktop1() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[9px] grow items-start leading-[1.21] min-h-px min-w-px relative shrink-0 text-[20px] tracking-[-1px]" data-name="Person 1">
      <p className="min-w-full relative shrink-0 text-black w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Phillip G.
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Senior Designer
      </p>
    </div>
  );
}

function Person2Desktop1() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[9px] grow items-start leading-[1.21] min-h-px min-w-px relative shrink-0 text-[20px] tracking-[-1px]" data-name="Person 2">
      <p className="min-w-full relative shrink-0 text-black w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Kat E.
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Senior Designer
      </p>
    </div>
  );
}

function Row2Desktop() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Row 2">
      <Person1Desktop1 />
      <Person2Desktop1 />
    </div>
  );
}

function Person1Desktop2() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[9px] grow items-start leading-[1.21] min-h-px min-w-px relative shrink-0 text-[20px] tracking-[-1px]" data-name="Person 1">
      <p className="min-w-full relative shrink-0 text-black w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lauren W.
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Senior Designer
      </p>
    </div>
  );
}

function Person2Desktop2() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[9px] grow items-start leading-[1.21] min-h-px min-w-px relative shrink-0 text-[20px] tracking-[-1px]" data-name="Person 2">
      <p className="min-w-full relative shrink-0 text-black w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Caleb E.
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Senior Designer
      </p>
    </div>
  );
}

function Row3Desktop() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Row 3">
      <Person1Desktop2 />
      <Person2Desktop2 />
    </div>
  );
}

function TeamContentDesktop() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[41px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Team content">
      <HeadshotsContainerDesktop />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 625 1">
            <line id="Divider" stroke="var(--stroke-0, black)" x2="625" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Row1Desktop />
      <Row2Desktop />
      <Row3Desktop />
    </div>
  );
}

function TeamContentDesktop1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Team content">
      <p className="basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-none max-w-[633px] min-h-px min-w-px relative shrink-0 text-[64px] text-black tracking-[-3.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Our Team
      </p>
      <TeamContentDesktop />
    </div>
  );
}

function OurTeamSectionDesktop() {
  return (
    <div className="relative size-full" data-name="Our team section">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[38px] items-start max-w-inherit pb-[100px] pt-0 px-[15px] relative size-full">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-[-0.53px] left-0 right-0 top-[-0.53px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1250 2">
                <path d="M0 0.533333H1250" id="Divider" stroke="var(--stroke-0, black)" strokeWidth="1.06667" />
              </svg>
            </div>
          </div>
          <TeamContentDesktop1 />
        </div>
      </div>
    </div>
  );
}

function ImageTablet() {
  return (
    <div className="aspect-[182.5/182.5] relative shrink-0 w-full" data-name="Image">
      <img alt="Portrait of a man with brown hair and glasses on a flat gray background." className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function DescriptionTablet() {
  return (
    <div className="content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[9px] items-start leading-[1.21] relative shrink-0 text-[20px] tracking-[-1px] w-[209px]" data-name="Description">
      <p className="relative shrink-0 text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Alex L.
      </p>
      <p className="max-w-[250px] relative shrink-0 text-[#767676] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Founder and Creative Director
      </p>
    </div>
  );
}

function Headshot1Tablet() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[17px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Headshot 1">
      <ImageTablet />
      <DescriptionTablet />
    </div>
  );
}

function ImageTablet1() {
  return (
    <div className="aspect-[182.5/182.5] relative shrink-0 w-full" data-name="Image">
      <img alt="Portrait of a woman with brown hair on a flat gray background." className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function DescriptionTablet1() {
  return (
    <div className="content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[9px] items-start leading-[1.21] relative shrink-0 text-[20px] tracking-[-1px] w-full" data-name="Description">
      <p className="relative shrink-0 text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cathy G.
      </p>
      <p className="max-w-[250px] relative shrink-0 text-[#767676] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Managing Director and Partner
      </p>
    </div>
  );
}

function Headshot2Tablet() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[17px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Headshot 2">
      <ImageTablet1 />
      <DescriptionTablet1 />
    </div>
  );
}

function HeadshotsContainerTablet() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Headshots container">
      <Headshot1Tablet />
      <Headshot2Tablet />
    </div>
  );
}

function Person1Tablet() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[9px] grow items-start leading-[1.21] min-h-px min-w-px relative shrink-0 text-[20px] tracking-[-1px]" data-name="Person 1">
      <p className="min-w-full relative shrink-0 text-black w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jeremy T.
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Senior Designer
      </p>
    </div>
  );
}

function Person2Tablet() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[9px] grow items-start leading-[1.21] min-h-px min-w-px relative shrink-0 text-[20px] tracking-[-1px]" data-name="Person 2">
      <p className="min-w-full relative shrink-0 text-black w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mariana V.
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Senior Designer
      </p>
    </div>
  );
}

function Row1Tablet() {
  return (
    <div className="content-start flex flex-wrap gap-[41px] items-start relative shrink-0 w-full" data-name="Row 1">
      <Person1Tablet />
      <Person2Tablet />
    </div>
  );
}

function Person1Tablet1() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[9px] grow items-start leading-[1.21] min-h-px min-w-px relative shrink-0 text-[20px] tracking-[-1px]" data-name="Person 1">
      <p className="min-w-full relative shrink-0 text-black w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Phillip G.
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Senior Designer
      </p>
    </div>
  );
}

function Person2Tablet1() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[9px] grow items-start leading-[1.21] min-h-px min-w-px relative shrink-0 text-[20px] tracking-[-1px]" data-name="Person 2">
      <p className="min-w-full relative shrink-0 text-black w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Kat E.
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Senior Designer
      </p>
    </div>
  );
}

function Row2Tablet() {
  return (
    <div className="content-start flex flex-wrap gap-[41px] items-start relative shrink-0 w-full" data-name="Row 2">
      <Person1Tablet1 />
      <Person2Tablet1 />
    </div>
  );
}

function Person1Tablet2() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[9px] grow items-start leading-[1.21] min-h-px min-w-px relative shrink-0 text-[20px] tracking-[-1px]" data-name="Person 1">
      <p className="min-w-full relative shrink-0 text-black w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lauren W.
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Senior Designer
      </p>
    </div>
  );
}

function Person2Tablet2() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[9px] grow items-start leading-[1.21] min-h-px min-w-px relative shrink-0 text-[20px] tracking-[-1px]" data-name="Person 2">
      <p className="min-w-full relative shrink-0 text-black w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Caleb E.
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Senior Designer
      </p>
    </div>
  );
}

function Row3Tablet() {
  return (
    <div className="content-start flex flex-wrap gap-[51px] items-start relative shrink-0 w-full" data-name="Row 3">
      <Person1Tablet2 />
      <Person2Tablet2 />
    </div>
  );
}

function TeamContentTablet() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[41px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Team content">
      <HeadshotsContainerTablet />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 385 1">
            <line id="Divider" stroke="var(--stroke-0, black)" x2="385" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Row1Tablet />
      <Row2Tablet />
      <Row3Tablet />
    </div>
  );
}

function TeamContentTablet1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Team content">
      <p className="basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-none max-w-[633px] min-h-px min-w-px relative shrink-0 text-[64px] text-black tracking-[-3.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Our Team
      </p>
      <TeamContentTablet />
    </div>
  );
}

function OurTeamSectionTablet() {
  return (
    <div className="relative size-full" data-name="Our team section">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[38px] items-start max-w-inherit pb-[100px] pt-0 px-[15px] relative size-full">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-[-0.53px] left-0 right-0 top-[-0.53px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 770 2">
                <path d="M0 0.533333H770" id="Divider" stroke="var(--stroke-0, black)" strokeWidth="1.06667" />
              </svg>
            </div>
          </div>
          <TeamContentTablet1 />
        </div>
      </div>
    </div>
  );
}

function ImageMobile() {
  return (
    <div className="aspect-[305/301] relative shrink-0 w-full" data-name="Image">
      <img alt="Portrait of a man with brown hair and glasses on a flat gray background." className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function DescriptionMobile() {
  return (
    <div className="content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[9px] items-start leading-[1.21] relative shrink-0 text-[20px] tracking-[-1px] w-[209px]" data-name="Description">
      <p className="relative shrink-0 text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Alex L.
      </p>
      <p className="max-w-[250px] relative shrink-0 text-[#767676] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Founder and Creative Director
      </p>
    </div>
  );
}

function Headshot1Mobile() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full" data-name="Headshot 1">
      <ImageMobile />
      <DescriptionMobile />
    </div>
  );
}

function ImageMobile1() {
  return (
    <div className="aspect-[305/301] relative shrink-0 w-full" data-name="Image">
      <img alt="Portrait of a woman with brown hair on a flat gray background." className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function DescriptionMobile1() {
  return (
    <div className="content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[9px] items-start leading-[1.21] relative shrink-0 text-[20px] tracking-[-1px] w-full" data-name="Description">
      <p className="relative shrink-0 text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cathy G.
      </p>
      <p className="max-w-[250px] relative shrink-0 text-[#767676] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Managing Director and Partner
      </p>
    </div>
  );
}

function Headshot2Mobile() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full" data-name="Headshot 2">
      <ImageMobile1 />
      <DescriptionMobile1 />
    </div>
  );
}

function HeadshotsContainerMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Headshots container">
      <Headshot1Mobile />
      <Headshot2Mobile />
    </div>
  );
}

function Person1Mobile() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[9px] grow items-start leading-[1.21] min-h-px min-w-px relative shrink-0 text-[20px] tracking-[-1px]" data-name="Person 1">
      <p className="min-w-full relative shrink-0 text-black w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jeremy T.
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Senior Designer
      </p>
    </div>
  );
}

function Person2Mobile() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[9px] grow items-start leading-[1.21] min-h-px min-w-px relative shrink-0 text-[20px] tracking-[-1px]" data-name="Person 2">
      <p className="min-w-full relative shrink-0 text-black w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mariana V.
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Senior Designer
      </p>
    </div>
  );
}

function Row1Mobile() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Row 1">
      <Person1Mobile />
      <Person2Mobile />
    </div>
  );
}

function Person1Mobile1() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[9px] grow items-start leading-[1.21] min-h-px min-w-px relative shrink-0 text-[20px] tracking-[-1px]" data-name="Person 1">
      <p className="min-w-full relative shrink-0 text-black w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Phillip G.
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Senior Designer
      </p>
    </div>
  );
}

function Person2Mobile1() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[9px] grow items-start leading-[1.21] min-h-px min-w-px relative shrink-0 text-[20px] tracking-[-1px]" data-name="Person 2">
      <p className="min-w-full relative shrink-0 text-black w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Kat E.
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Senior Designer
      </p>
    </div>
  );
}

function Row2Mobile() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Row 2">
      <Person1Mobile1 />
      <Person2Mobile1 />
    </div>
  );
}

function Person1Mobile2() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[9px] grow items-start leading-[1.21] min-h-px min-w-px relative shrink-0 text-[20px] tracking-[-1px]" data-name="Person 1">
      <p className="min-w-full relative shrink-0 text-black w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lauren W.
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Senior Designer
      </p>
    </div>
  );
}

function Person2Mobile2() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[9px] grow items-start leading-[1.21] min-h-px min-w-px relative shrink-0 text-[20px] tracking-[-1px]" data-name="Person 2">
      <p className="min-w-full relative shrink-0 text-black w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Caleb E.
      </p>
      <p className="relative shrink-0 text-[#767676] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Senior Designer
      </p>
    </div>
  );
}

function Row3Mobile() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Row 3">
      <Person1Mobile2 />
      <Person2Mobile2 />
    </div>
  );
}

function TeamContentMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[41px] items-start justify-center relative shrink-0 w-full" data-name="Team content">
      <HeadshotsContainerMobile />
      <div aria-hidden="true" className="h-0 relative shrink-0 w-full" data-name="Divider" role="presentation">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 1">
            <line id="Divider" stroke="var(--stroke-0, black)" x2="345" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Row1Mobile />
      <Row2Mobile />
      <Row3Mobile />
    </div>
  );
}

function TeamContentMobile1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Team content">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none max-w-[633px] relative shrink-0 text-[64px] text-black tracking-[-3.2px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Our Team
      </p>
      <TeamContentMobile />
    </div>
  );
}

function OurTeamSectionMobile() {
  return (
    <div className="relative size-full" data-name="Our team section">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[38px] items-start max-w-inherit pb-[100px] pt-0 px-[15px] relative size-full">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute bottom-[-0.53px] left-0 right-0 top-[-0.53px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 2">
                <path d="M0 0.533333H345" id="Divider" stroke="var(--stroke-0, black)" strokeWidth="1.06667" />
              </svg>
            </div>
          </div>
          <TeamContentMobile1 />
        </div>
      </div>
    </div>
  );
}

function OurTeamSection() {
  const { width } = useActiveBreakpoint();
  if (width < 800) {
    return <OurTeamSectionMobile />;
  }
  if (width < 1280) {
    return <OurTeamSectionTablet />;
  }
  return <OurTeamSectionDesktop />;
}

// OurTeamSection은 전역으로 사용 가능

// SVG 파일은 나중에 추가 예정
// import svgPaths from "./svg-xj8asnx3da";
// useActiveBreakpoint는 이미 상단에서 import됨

// 임시 SVG 경로 객체
const svgPaths = {
  p27a2876f: "M0 0.5H1250",
  p13564800: "M0 0.5H770",
  p2774a700: "M0 0.5H345"
};

function ConnectWithUsContentDesktop() {
  return (
    <div className="content-stretch flex flex-col gap-[34px] items-start relative shrink-0 w-full" data-name="Connect with us content">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-[-0.53px] left-0 right-0 top-[-0.53px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1250 2">
            <path d={svgPaths.p27a2876f} id="Divider" stroke="var(--stroke-0, black)" strokeWidth="1.06667" />
          </svg>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[37px] text-black tracking-[-1.11px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Connect with us to explore your project's potential.`}</p>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-[-0.53px] left-0 right-0 top-[-0.53px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1250 2">
            <path d={svgPaths.p27a2876f} id="Divider" stroke="var(--stroke-0, black)" strokeWidth="1.06667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ConnectWithUsSectionDesktop() {
  return (
    <div className="relative size-full" data-name="Connect with us section">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start max-w-inherit px-[15px] py-0 relative size-full">
          <ConnectWithUsContentDesktop />
        </div>
      </div>
    </div>
  );
}

function ConnectWithUsContentTablet() {
  return (
    <div className="content-stretch flex flex-col gap-[34px] items-start relative shrink-0 w-full" data-name="Connect with us content">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-[-0.53px] left-0 right-0 top-[-0.53px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 770 2">
            <path d={svgPaths.p13564800} id="Divider" stroke="var(--stroke-0, black)" strokeWidth="1.06667" />
          </svg>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none min-w-full relative shrink-0 text-[37px] text-black tracking-[-1.11px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Connect with us to explore your project's potential.`}</p>
      <div className="h-0 relative shrink-0 w-[1250px]" data-name="Divider">
        <div className="absolute bottom-[-0.53px] left-0 right-0 top-[-0.53px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1250 2">
            <path d={svgPaths.p27a2876f} id="Divider" stroke="var(--stroke-0, black)" strokeWidth="1.06667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ConnectWithUsSectionTablet() {
  return (
    <div className="relative size-full" data-name="Connect with us section">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start max-w-inherit px-[15px] py-0 relative size-full">
          <ConnectWithUsContentTablet />
        </div>
      </div>
    </div>
  );
}

function ConnectWithUsContentMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[34px] items-start relative shrink-0 w-full" data-name="Connect with us content">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-[-0.53px] left-0 right-0 top-[-0.53px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 2">
            <path d={svgPaths.p2774a700} id="Divider" stroke="var(--stroke-0, black)" strokeWidth="1.06667" />
          </svg>
        </div>
      </div>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[37px] text-black tracking-[-1.11px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Connect with us to explore your project's potential.`}</p>
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-[-0.53px] left-0 right-0 top-[-0.53px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 2">
            <path d={svgPaths.p2774a700} id="Divider" stroke="var(--stroke-0, black)" strokeWidth="1.06667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ConnectWithUsSectionMobile() {
  return (
    <div className="relative size-full" data-name="Connect with us section">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start max-w-inherit px-[15px] py-0 relative size-full">
          <ConnectWithUsContentMobile />
        </div>
      </div>
    </div>
  );
}

function ConnectWithUsSection() {
  const { width } = useActiveBreakpoint();
  if (width < 800) {
    return <ConnectWithUsSectionMobile />;
  }
  if (width < 1280) {
    return <ConnectWithUsSectionTablet />;
  }
  return <ConnectWithUsSectionDesktop />;
}

// ConnectWithUsSection은 전역으로 사용 가능

// SVG 파일은 나중에 추가 예정
// import svgPaths from "./svg-c7brv9sy99";
// useActiveBreakpoint는 이미 상단에서 import됨

// 임시 SVG 경로 객체 (Footer용)
const svgPathsFooter = {
  p3185b000: "M0,0",
  p5599b00: "M0,0",
  p3b5e7f00: "M0,0",
  p2a5d1d00: "M0,0"
};

function LogoDesktop() {
  return (
    <div className="h-[59.025px] relative shrink-0 w-[121.004px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121 60">
        <g id="Logo">
          <g clipPath="url(#clip0_3_625)" id="Layer_1">
            <path d={svgPathsFooter.p3185b000} fill="var(--fill-0, black)" id="Vector" />
          </g>
          <circle cx="91.5721" cy="50.5877" fill="var(--fill-0, black)" id="Ellipse 38147" r="8.369" />
          <ellipse cx="91.529" cy="8.369" fill="var(--fill-0, black)" id="Ellipse 38146" rx="8.44306" ry="8.369" />
          <circle cx="112.635" cy="29.4279" fill="var(--fill-0, black)" id="Ellipse 38148" r="8.369" transform="rotate(-90 112.635 29.4279)" />
          <ellipse cx="70.4159" cy="29.4788" fill="var(--fill-0, black)" id="Ellipse 38149" rx="8.44306" ry="8.369" transform="rotate(-90 70.4159 29.4788)" />
          <circle cx="106.414" cy="14.516" fill="var(--fill-0, black)" id="Ellipse 38150" r="8.369" transform="rotate(-135 106.414 14.516)" />
          <ellipse cx="76.5961" cy="44.4011" fill="var(--fill-0, black)" id="Ellipse 38151" rx="8.44306" ry="8.369" transform="rotate(-135 76.5961 44.4011)" />
          <circle cx="106.453" cy="44.4219" fill="var(--fill-0, black)" id="Ellipse 38152" r="8.369" transform="rotate(-45 106.453 44.4219)" />
          <ellipse cx="76.5676" cy="14.6039" fill="var(--fill-0, black)" id="Ellipse 38153" rx="8.44306" ry="8.369" transform="rotate(-45 76.5676 14.6039)" />
        </g>
        <defs>
          <clipPath id="clip0_3_625">
            <rect fill="white" height="58.8527" transform="translate(0 0.171875)" width="58.8527" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoContainDesktop() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start max-w-[625px] min-h-px min-w-px relative shrink-0" data-name="Logo contain">
      <LogoDesktop />
    </div>
  );
}

function OfficeContainDesktop() {
  return (
    <div className="content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[30px] items-start leading-none relative shrink-0 text-[20px] text-black tracking-[-1px] w-[201px]" data-name="Office contain">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        OFFICE
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        {`15 Candyland Lane `}
        <br aria-hidden="true" />
        28010 San Francisco
      </p>
    </div>
  );
}

function ContactLinksDesktop() {
  return (
    <div className="content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[10px] items-start leading-[0] relative shrink-0 text-black tracking-[-1px] w-full" data-name="Contact links">
      <a className="block relative shrink-0 text-[20px] w-full" href="https://figma.com/sites" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="cursor-pointer leading-none">(646) 555-4567</p>
      </a>
      <a className="block relative shrink-0 text-[0px] w-full" href="https://figma.com/sites" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="cursor-pointer font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none text-[20px] tracking-[-1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          hello@figma.com
        </p>
      </a>
    </div>
  );
}

function ContactContainDesktop() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full" data-name="Contact contain">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[20px] text-black tracking-[-1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        CONTACT
      </p>
      <ContactLinksDesktop />
    </div>
  );
}

function OfficeContainDesktop1() {
  return (
    <div className="content-stretch flex flex-col gap-[62px] items-start relative shrink-0 w-[227px]" data-name="Office contain">
      <OfficeContainDesktop />
      <ContactContainDesktop />
    </div>
  );
}

function SocialLinksDesktop() {
  return (
    <div className="content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[10px] items-start leading-[0] relative shrink-0 text-[20px] text-black tracking-[-1px] w-full" data-name="Social links">
      <a className="block relative shrink-0 w-full" href="https://www.instagram.com/figma" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="cursor-pointer leading-none">Instagram</p>
      </a>
      <a className="block relative shrink-0 w-full" href="https://figma.com/sites" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="cursor-pointer leading-none">Behance</p>
      </a>
      <a className="block relative shrink-0 w-full" href="https://figma.com/sites" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="cursor-pointer leading-none">Spotify</p>
      </a>
      <a className="block relative shrink-0 w-full" href="http://linkedin.com/company/figma" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="cursor-pointer leading-none">LinkedIn</p>
      </a>
    </div>
  );
}

function SocialContainDesktop() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[89px]" data-name="Social contain">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[20px] text-black tracking-[-1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        SOCIAL
      </p>
      <SocialLinksDesktop />
    </div>
  );
}

function FooterTextDesktop() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[616px]" data-name="Footer text">
      <OfficeContainDesktop1 />
      <SocialContainDesktop />
    </div>
  );
}

function FooterContentDesktop() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Footer content">
      <LogoContainDesktop />
      <FooterTextDesktop />
    </div>
  );
}

function FooterLogoDesktop() {
  return (
    <div aria-label="Icons" className="aspect-[1248/152.07] content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Footer logo">
      <div className="aspect-[1248/152.07] relative shrink-0 w-full" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1250 153">
          <path d={svgPathsFooter.p5599b00} fill="var(--fill-0, black)" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function FooterSectionDesktop() {
  return (
    <div className="relative size-full" data-name="Footer section">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[127px] items-start max-w-inherit pb-[15px] pt-[30px] px-[15px] relative size-full">
          <FooterContentDesktop />
          <FooterLogoDesktop />
        </div>
      </div>
    </div>
  );
}

function LogoTablet() {
  return (
    <div className="h-[59.025px] relative shrink-0 w-[121.004px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121 60">
        <g id="Logo">
          <g clipPath="url(#clip0_3_625)" id="Layer_1">
            <path d={svgPathsFooter.p3185b000} fill="var(--fill-0, black)" id="Vector" />
          </g>
          <circle cx="91.5721" cy="50.5877" fill="var(--fill-0, black)" id="Ellipse 38147" r="8.369" />
          <ellipse cx="91.529" cy="8.369" fill="var(--fill-0, black)" id="Ellipse 38146" rx="8.44306" ry="8.369" />
          <circle cx="112.635" cy="29.4279" fill="var(--fill-0, black)" id="Ellipse 38148" r="8.369" transform="rotate(-90 112.635 29.4279)" />
          <ellipse cx="70.4159" cy="29.4788" fill="var(--fill-0, black)" id="Ellipse 38149" rx="8.44306" ry="8.369" transform="rotate(-90 70.4159 29.4788)" />
          <circle cx="106.414" cy="14.516" fill="var(--fill-0, black)" id="Ellipse 38150" r="8.369" transform="rotate(-135 106.414 14.516)" />
          <ellipse cx="76.5961" cy="44.4011" fill="var(--fill-0, black)" id="Ellipse 38151" rx="8.44306" ry="8.369" transform="rotate(-135 76.5961 44.4011)" />
          <circle cx="106.453" cy="44.4219" fill="var(--fill-0, black)" id="Ellipse 38152" r="8.369" transform="rotate(-45 106.453 44.4219)" />
          <ellipse cx="76.5676" cy="14.6039" fill="var(--fill-0, black)" id="Ellipse 38153" rx="8.44306" ry="8.369" transform="rotate(-45 76.5676 14.6039)" />
        </g>
        <defs>
          <clipPath id="clip0_3_625">
            <rect fill="white" height="58.8527" transform="translate(0 0.171875)" width="58.8527" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoContainTablet() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start max-w-[625px] min-h-px min-w-px relative shrink-0" data-name="Logo contain">
      <LogoTablet />
    </div>
  );
}

function OfficeContainTablet() {
  return (
    <div className="content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[30px] items-start relative shrink-0 text-black tracking-[-1px] w-[201px]" data-name="Office contain">
      <p className="leading-none relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        OFFICE
      </p>
      <a className="block leading-[0] relative shrink-0 text-[0px] w-full" href="https://figma.com/sites" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="cursor-pointer font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none text-[20px] tracking-[-1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {`15 Candyland Lane `}
          <br aria-hidden="true" />
          28010 San Francisco
        </p>
      </a>
    </div>
  );
}

function ContactLinksTablet() {
  return (
    <div className="content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[10px] items-start leading-[0] relative shrink-0 text-black tracking-[-1px] w-full" data-name="Contact links">
      <a className="block relative shrink-0 text-[20px] w-full" href="https://figma.com/sites" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="cursor-pointer leading-none">(646) 555-4567</p>
      </a>
      <a className="block relative shrink-0 text-[0px] w-full" href="https://figma.com/sites" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="cursor-pointer font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none text-[20px] tracking-[-1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          hello@figma.com
        </p>
      </a>
    </div>
  );
}

function ContactContainTablet() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full" data-name="Contact contain">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[20px] text-black tracking-[-1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        CONTACT
      </p>
      <ContactLinksTablet />
    </div>
  );
}

function OfficeContainTablet1() {
  return (
    <div className="content-stretch flex flex-col gap-[62px] items-start relative shrink-0 w-[227px]" data-name="Office contain">
      <OfficeContainTablet />
      <ContactContainTablet />
    </div>
  );
}

function SocialLinksTablet() {
  return (
    <div className="content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[10px] items-start leading-[0] relative shrink-0 text-[20px] text-black tracking-[-1px] w-full" data-name="Social links">
      <a className="block relative shrink-0 w-full" href="https://www.instagram.com/figma" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="cursor-pointer leading-none">Instagram</p>
      </a>
      <a className="block relative shrink-0 w-full" href="https://figma.com/sites" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="cursor-pointer leading-none">Behance</p>
      </a>
      <a className="block relative shrink-0 w-full" href="https://figma.com/sites" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="cursor-pointer leading-none">Spotify</p>
      </a>
      <a className="block relative shrink-0 w-full" href="http://linkedin.com/company/figma" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="cursor-pointer leading-none">LinkedIn</p>
      </a>
    </div>
  );
}

function SocialContainTablet() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[89px]" data-name="Social contain">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[20px] text-black tracking-[-1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        SOCIAL
      </p>
      <SocialLinksTablet />
    </div>
  );
}

function FooterTextTablet() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[616px]" data-name="Footer text">
      <OfficeContainTablet1 />
      <SocialContainTablet />
    </div>
  );
}

function FooterContentTablet() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Footer content">
      <LogoContainTablet />
      <FooterTextTablet />
    </div>
  );
}

function FooterLogoTablet() {
  return (
    <div aria-label="Icons" className="aspect-[1248/152.07] content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Footer logo">
      <div className="aspect-[1248/152.07] relative shrink-0 w-full" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 770 94">
          <path clipRule="evenodd" d={svgPathsFooter.p3b5e7f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function FooterSectionTablet() {
  return (
    <div className="relative size-full" data-name="Footer section">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[127px] items-start max-w-inherit pb-[15px] pt-[30px] px-[15px] relative size-full">
          <FooterContentTablet />
          <FooterLogoTablet />
        </div>
      </div>
    </div>
  );
}

function FooterSmallLogoMobile() {
  return (
    <div className="h-[59.025px] relative shrink-0 w-[121.004px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121 60">
        <g id="Logo">
          <g clipPath="url(#clip0_3_625)" id="Layer_1">
            <path d={svgPathsFooter.p3185b000} fill="var(--fill-0, black)" id="Vector" />
          </g>
          <circle cx="91.5721" cy="50.5877" fill="var(--fill-0, black)" id="Ellipse 38147" r="8.369" />
          <ellipse cx="91.529" cy="8.369" fill="var(--fill-0, black)" id="Ellipse 38146" rx="8.44306" ry="8.369" />
          <circle cx="112.635" cy="29.4279" fill="var(--fill-0, black)" id="Ellipse 38148" r="8.369" transform="rotate(-90 112.635 29.4279)" />
          <ellipse cx="70.4159" cy="29.4788" fill="var(--fill-0, black)" id="Ellipse 38149" rx="8.44306" ry="8.369" transform="rotate(-90 70.4159 29.4788)" />
          <circle cx="106.414" cy="14.516" fill="var(--fill-0, black)" id="Ellipse 38150" r="8.369" transform="rotate(-135 106.414 14.516)" />
          <ellipse cx="76.5961" cy="44.4011" fill="var(--fill-0, black)" id="Ellipse 38151" rx="8.44306" ry="8.369" transform="rotate(-135 76.5961 44.4011)" />
          <circle cx="106.453" cy="44.4219" fill="var(--fill-0, black)" id="Ellipse 38152" r="8.369" transform="rotate(-45 106.453 44.4219)" />
          <ellipse cx="76.5676" cy="14.6039" fill="var(--fill-0, black)" id="Ellipse 38153" rx="8.44306" ry="8.369" transform="rotate(-45 76.5676 14.6039)" />
        </g>
        <defs>
          <clipPath id="clip0_3_625">
            <rect fill="white" height="58.8527" transform="translate(0 0.171875)" width="58.8527" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoContainMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start max-w-[625px] relative shrink-0 w-full" data-name="Logo contain">
      <FooterSmallLogoMobile />
    </div>
  );
}

function OfficeContainMobile() {
  return (
    <div className="content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[30px] items-start relative shrink-0 text-black tracking-[-1px] w-[201px]" data-name="Office contain">
      <p className="leading-none relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        OFFICE
      </p>
      <a className="block leading-[0] relative shrink-0 text-[0px] w-full" href="https://figma.com/sites" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="cursor-pointer font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none text-[20px] tracking-[-1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {`15 Candyland Lane `}
          <br aria-hidden="true" />
          28010 San Francisco
        </p>
      </a>
    </div>
  );
}

function ContactLinksMobile() {
  return (
    <div className="content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[10px] items-start relative shrink-0 text-[20px] text-black tracking-[-1px] w-full" data-name="Contact links">
      <a className="block leading-[0] relative shrink-0 w-full" href="https://figma.com/sites" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="cursor-pointer leading-none">(646) 555-4567</p>
      </a>
      <a className="[text-underline-position:from-font] block cursor-pointer decoration-solid leading-none relative shrink-0 underline w-full" href="mailto:hello@figma.com" style={{ fontVariationSettings: "'wdth' 100" }}>
        hello@figma.com
      </a>
    </div>
  );
}

function ContactContainMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full" data-name="Contact contain">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[20px] text-black tracking-[-1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        CONTACT
      </p>
      <ContactLinksMobile />
    </div>
  );
}

function OfficeContainMobile1() {
  return (
    <div className="content-stretch flex flex-col gap-[62px] items-start relative shrink-0 w-full" data-name="Office contain">
      <OfficeContainMobile />
      <ContactContainMobile />
    </div>
  );
}

function SocialLinksMobile() {
  return (
    <div className="content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[10px] items-start leading-[0] relative shrink-0 text-[20px] text-black tracking-[-1px] w-full" data-name="Social links">
      <a className="block relative shrink-0 w-full" href="https://www.instagram.com/figma" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="cursor-pointer leading-none">Instagram</p>
      </a>
      <a className="block relative shrink-0 w-full" href="https://figma.com/sites" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="cursor-pointer leading-none">Behance</p>
      </a>
      <a className="block relative shrink-0 w-full" href="https://figma.com/sites" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="cursor-pointer leading-none">Spotify</p>
      </a>
      <a className="block relative shrink-0 w-full" href="http://linkedin.com/company/figma" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="cursor-pointer leading-none">LinkedIn</p>
      </a>
    </div>
  );
}

function SocialContainMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[89px]" data-name="Social contain">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[20px] text-black tracking-[-1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        SOCIAL
      </p>
      <SocialLinksMobile />
    </div>
  );
}

function FooterTextMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[62px] items-start relative shrink-0 w-full" data-name="Footer text">
      <OfficeContainMobile1 />
      <SocialContainMobile />
    </div>
  );
}

function FooterContentMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-full" data-name="Footer content">
      <LogoContainMobile />
      <FooterTextMobile />
    </div>
  );
}

function FooterLogoMobile() {
  return (
    <div aria-label="Icons" className="aspect-[1248/152.07] content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Footer logo">
      <div className="aspect-[1248/152.07] relative shrink-0 w-full" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 43">
          <path clipRule="evenodd" d={svgPathsFooter.p2a5d1d00} fill="var(--fill-0, black)" fillRule="evenodd" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function FooterSectionMobile() {
  return (
    <div className="relative size-full" data-name="Footer section">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[127px] items-start max-w-inherit pb-[15px] pt-[30px] px-[15px] relative size-full">
          <FooterContentMobile />
          <FooterLogoMobile />
        </div>
      </div>
    </div>
  );
}

function FooterSection() {
  const { width } = useActiveBreakpoint();
  if (width < 800) {
    return <FooterSectionMobile />;
  }
  if (width < 1280) {
    return <FooterSectionTablet />;
  }
  return <FooterSectionDesktop />;
}

// FooterSection은 전역으로 사용 가능

// 메인 App 컴포넌트 - 모든 섹션을 포함
function App() {
  return (
    <div>
      <NavHeader />
      <IntroSection />
      <StatsSection />
      <NewSectionDesktop />
      <StatsContent />
      <AwardsSection />
      <OurTeamSection />
      <ConnectWithUsSection />
      <FooterSection />
    </div>
  );
}

// App은 전역으로 사용 가능