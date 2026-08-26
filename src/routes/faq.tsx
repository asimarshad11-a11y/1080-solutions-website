import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AreasServed,
  CtaBand,
  CtaPrimary,
  CtaSecondary,
  Faq,
  PageHero,
  SectionHeading,
} from "@/components/site/Sections";
import { faqJsonLd, seoHead } from "@/lib/seo";
import heroImage from "@/assets/hero-smart-home.jpg";

const GENERAL = [
  {
    question: "What does a smart home from 1080 Solutions actually include?",
    answer:
      "Whatever the house needs, run as one system rather than a drawer of apps. Typically that means lighting control, heating and climate, motorised blinds and curtains, multi-room audio and video, a home cinema or media room, CCTV and door entry, and the network that carries all of it. You control it from wall keypads, in-room touch screens, a remote or your phone.",
  },
  {
    question: "Do you work on existing homes or only new builds?",
    answer:
      "Both. New builds and full renovations give us the most freedom because we can plan cable routes and containment before plaster. In an occupied house we work to what the fabric allows — wireless lighting, retrofit speakers and careful cable runs — and we are honest about what is and isn't sensible before you commit.",
  },
  {
    question: "How does a project usually run?",
    answer:
      "A consultation and survey, then a written design and proposal room by room. If it's a build we issue drawings for the electrician and attend first fix, then return for second fix, rack build, programming and commissioning. We hand over in person, show the household how it works, and stay available afterwards.",
  },
  {
    question: "Can you take over a system another company installed?",
    answer:
      "Often, yes. We survey what's there, document the rack and network, and tell you plainly what can be kept, what needs replacing and what it will take to bring it up to date. Some systems are worth adopting as they are; others are better rebuilt around the parts that still earn their place.",
  },
  {
    question: "Do you cover my area?",
    answer:
      "We work across Glasgow and Central Scotland, including Whitecraigs, Newton Mearns, Giffnock, Clarkston, Bearsden, Milngavie, Bothwell, East Kilbride, Hamilton, Renfrewshire and Lanarkshire. For larger projects we travel further into Scotland — ask us.",
  },
];

const CONTROL4 = [
  {
    question: "What is Control4 and why do you specify it?",
    answer:
      "Control4 is a professionally installed automation platform that ties lighting, AV, heating, blinds and security into one interface. We specify it because it is engineered for whole-home use rather than single gadgets: it is programmed to the house, it keeps working when the internet doesn't, and it can be extended years later without starting again.",
  },
  {
    question: "How is that different from off-the-shelf smart plugs and apps?",
    answer:
      "Consumer devices each solve one problem and each want their own app and account. A properly integrated system is designed as a whole — one keypad, one remote, one app, predictable behaviour for everyone in the house, and someone accountable when something needs attention.",
  },
  {
    question: "Can Control4 work with Lutron, KNX or DALI lighting?",
    answer:
      "Yes. We regularly pair Control4 with Lutron lighting and shading, and integrate KNX or DALI where the electrical design calls for it. The point is that the lighting keeps its own robust control layer while still appearing inside the wider system.",
  },
  {
    question: "Will I be locked out of my own house if the system fails?",
    answer:
      "No. We design so the fundamentals degrade gracefully: light switches still switch lights, heating still heats. Automation sits on top of working infrastructure rather than replacing it.",
  },
];

const LIGHTING = [
  {
    question: "What does lighting control give me that dimmers don't?",
    answer:
      "Scenes instead of switches. One engraved keypad plate replaces a row of plates, and a single press composes a whole floor — task lighting in the kitchen, low warm light in the evening, nothing left burning upstairs. Behind it sits smooth, flicker-free dimming that cheap drivers can't match.",
  },
  {
    question: "Do you design the lighting or just control it?",
    answer:
      "We work with your architect or lighting designer on circuit design, keypad positions and dimming compatibility, and we specify control that suits the fittings chosen. Where there is no lighting designer we advise on layout so the control has something worth controlling.",
  },
  {
    question: "Can blinds and curtains be on the same scenes?",
    answer:
      "Yes — motorised blinds, Roman blinds and curtain tracks join the same keypads and schedules, so evening scenes close the shades and morning scenes open them.",
  },
];

const CINEMA_AV = [
  {
    question: "What's the difference between a media room and a dedicated cinema?",
    answer:
      "A media room lives with daylight and furniture, so we optimise a large screen, controlled surround and a discreet install. A dedicated room lets us treat acoustics, control light completely, tier seating and use reference projection — which is where genuinely cinema-grade performance comes from.",
  },
  {
    question: "Can I have music in every room without visible speakers?",
    answer:
      "Yes. In-ceiling and in-wall speakers can be trimmed to disappear into the ceiling line, or plastered in entirely for an invisible finish. Sources and amplification live in a central rack, so rooms stay clear.",
  },
  {
    question: "Do you hide televisions?",
    answer:
      "Where the design asks for it — behind art, in joinery, on a lift or in a recessed frame flush with the wall. It has to be planned early, because power, ventilation and cable routes decide what's possible.",
  },
];

const NETWORK_SECURITY = [
  {
    question: "Why does a smart home need a proper network?",
    answer:
      "Because everything else depends on it. Streaming, touch screens, cameras, lighting processors and door entry all share the same infrastructure, so we design structured cabling, business-grade switching and surveyed Wi-Fi coverage rather than relying on a single router in a cupboard.",
  },
  {
    question: "Will Wi-Fi reach the garden room or the top floor?",
    answer:
      "If it's designed to. We plan access point positions around the building's construction — stone, foundations and insulation all matter — and cable outbuildings properly rather than hoping a repeater copes.",
  },
  {
    question: "How is CCTV footage stored and who can see it?",
    answer:
      "Recording stays on site on a dedicated recorder, on its own network segment, with access limited to the people you nominate. You can view live and recorded footage from your phone or an in-home screen.",
  },
  {
    question: "Can door entry and access control be part of the same system?",
    answer:
      "Yes. Door stations, electric locks, gates and access control can ring in-home touch screens and your phone, and can be tied to lighting and alarm modes so arriving or leaving the house is a single action.",
  },
];

const SUPPORT = [
  {
    question: "What happens after handover?",
    answer:
      "We stay involved. Systems are documented, remotely monitored where you allow it, and updated deliberately rather than automatically. Most issues are resolved without a visit; when a visit is needed, you're dealing with the people who built the system.",
  },
  {
    question: "Can the system be extended later?",
    answer:
      "That's the reason to install a professional platform in the first place. Rooms, sources, cameras, keypads and screens can be added as the house changes, provided the infrastructure was planned for it — which is why we oversize containment and rack space from the outset.",
  },
  {
    question: "Do you provide pricing over the phone?",
    answer:
      "No, because a meaningful figure depends on the house, the rooms in scope and the standard you're aiming for. After a consultation and survey you get a written, itemised proposal so you can see exactly what each part contributes.",
  },
];

const ALL_FAQS = [
  ...GENERAL,
  ...CONTROL4,
  ...LIGHTING,
  ...CINEMA_AV,
  ...NETWORK_SECURITY,
  ...SUPPORT,
];

export const Route = createFileRoute("/faq")({
  head: () =>
    seoHead({
      title: "Smart Home FAQs | Control4, Lighting & AV | 1080 Solutions",
      description:
        "Answers on smart home installation, Control4, Lutron lighting, home cinema, networking, CCTV, project process and system takeovers in Glasgow and Central Scotland.",
      path: "/faq",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "FAQs", path: "/faq" },
      ],
      jsonLd: [faqJsonLd(ALL_FAQS)],
    }),
  component: FaqPage,
});

function Group(props: {
  eyebrow: string;
  title: string;
  items: { question: string; answer: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading eyebrow={props.eyebrow} title={props.title} />
        {props.children && (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {props.children}
          </p>
        )}
        <div className="mt-8">
          <Faq items={props.items} />
        </div>
      </div>
    </section>
  );
}

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Smart home questions, answered plainly."
        lede="How we design, install, programme and support smart homes across Glasgow and Central Scotland — without the jargon or the sales script."
        image={heroImage}
        imageAlt="Smart home living space in Glasgow with concealed audio and warm architectural lighting"
      >
        <CtaPrimary to="/contact">Arrange a Consultation</CtaPrimary>
        <CtaSecondary to="/smart-home-glasgow">Smart Home Glasgow</CtaSecondary>
      </PageHero>

      <Group eyebrow="Getting Started" title="The basics." items={GENERAL}>
        If your question isn't here, the{" "}
        <Link to="/smart-home-glasgow" className="text-primary hover:underline">
          smart home overview
        </Link>{" "}
        covers scope in more detail, or you can simply{" "}
        <Link to="/contact" className="text-primary hover:underline">
          ask us directly
        </Link>
        .
      </Group>

      <Group eyebrow="Control4 & Automation" title="Control4 and integration." items={CONTROL4}>
        More on platform choice and programming on the{" "}
        <Link to="/control4-glasgow" className="text-primary hover:underline">
          Control4 Glasgow
        </Link>{" "}
        and{" "}
        <Link to="/home-automation-glasgow" className="text-primary hover:underline">
          home automation
        </Link>{" "}
        pages.
      </Group>

      <Group eyebrow="Lighting & Shading" title="Lighting, Lutron and blinds." items={LIGHTING}>
        See{" "}
        <Link to="/smart-lighting-glasgow" className="text-primary hover:underline">
          smart lighting
        </Link>{" "}
        and{" "}
        <Link to="/lutron-glasgow" className="text-primary hover:underline">
          Lutron lighting control
        </Link>
        .
      </Group>

      <Group eyebrow="Cinema & Audio" title="Home cinema and multi-room AV." items={CINEMA_AV}>
        Worked examples on the{" "}
        <Link to="/home-cinema" className="text-primary hover:underline">
          home cinema
        </Link>{" "}
        and{" "}
        <Link to="/multi-room-audio-and-video" className="text-primary hover:underline">
          multi-room audio and video
        </Link>{" "}
        pages, plus our{" "}
        <Link to="/projects/whitecraigs-glasgow" className="text-primary hover:underline">
          Whitecraigs cinema project
        </Link>
        .
      </Group>

      <Group
        eyebrow="Network & Security"
        title="Networking, CCTV and access."
        items={NETWORK_SECURITY}
      >
        Detail on{" "}
        <Link to="/data-networking-and-wifi" className="text-primary hover:underline">
          networking and Wi-Fi
        </Link>
        ,{" "}
        <Link to="/alarms-and-cctv" className="text-primary hover:underline">
          alarms and CCTV
        </Link>{" "}
        and{" "}
        <Link to="/door-entry-and-access" className="text-primary hover:underline">
          door entry and access
        </Link>
        .
      </Group>

      <Group eyebrow="Support & Takeovers" title="Living with the system." items={SUPPORT} />

      <AreasServed intro="We answer these questions every week for clients in Glasgow, Whitecraigs, Newton Mearns, Giffnock, Clarkston, Bearsden, Milngavie, Bothwell, East Kilbride, Hamilton and across Central Scotland." />
      <CtaBand
        title="Still have a question?"
        lede="Tell us about the house and what you'd like it to do. We'll give you a straight answer."
      />
    </>
  );
}
