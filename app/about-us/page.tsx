import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    ShieldCheck,
    Sparkles,
    ArrowUpRight,
    Microscope,
    HeartHandshake,
    CheckCircle2,
    GraduationCap,
} from "lucide-react";

export const metadata: Metadata = {
    title: "About Us & Clinical Team | AG Aesthetics & Wellness Clinic Kharar",
    description:
        "Meet the doctors and clinical team behind AG Aesthetics & Wellness Clinic in Kharar, Punjab. Physician-led clinical cosmetology, advanced laser dermatology, and autologous cellular therapies.",
    keywords: [
        "AG Aesthetics Kharar",
        "Aesthetic clinic Mohali",
        "Clinical dermatology Kharar",
        "Laser skin treatment Punjab",
        "Doctor team AG Aesthetics",
        "Dermatologists Kharar",
    ],
    openGraph: {
        title: "About Us & Clinical Team | AG Aesthetics & Wellness Clinic",
        description:
            "Evidence-based aesthetic medicine, advanced dermatology, and autologous hair therapies in Kharar, Punjab.",
        url: "/about",
        images: [
            {
                url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
                alt: "AG Aesthetics Consultation Suite",
            },
        ],
    },
};

export default function AboutPage() {
    const clinicalPillars = [
        {
            id: 1,
            icon: <Microscope strokeWidth={1.2} className="w-6 h-6 text-[#546650]" />,
            title: "Evidence-Based Protocols",
            description:
                "Every chemical peel, laser pass, and micro-dose injectable is calibrated specifically for South Asian skin phototypes to prevent post-inflammatory hyperpigmentation.",
        },
        {
            id: 2,
            icon: <Sparkles strokeWidth={1.2} className="w-6 h-6 text-[#546650]" />,
            title: "Anatomical Restraint",
            description:
                "We reject over-filled, exaggerated trends. Our aesthetic philosophy centers on natural facial vector balance, restoring youthful contours while preserving expression.",
        },
        {
            id: 3,
            icon: <ShieldCheck strokeWidth={1.2} className="w-6 h-6 text-[#546650]" />,
            title: "US-FDA Cleared Hardware",
            description:
                "We exclusively operate certified medical lasers, triple-wavelength hair removal systems, and authentic vials reconstituted directly in your presence.",
        },
        {
            id: 4,
            icon: <HeartHandshake strokeWidth={1.2} className="w-6 h-6 text-[#546650]" />,
            title: "Doctor-Led Aftercare",
            description:
                "From preliminary cross-polarized skin imaging to your 14-day touch-up review, your treatment journey is monitored directly by qualified clinical doctors.",
        },
    ];

    const credentials = [
        "Doctor-Led Diagnostic Consultations",
        "US-FDA & CE Certified Technologies",
        "Strict Single-Use Sterile Disposables",
        "Zero Pushy Commercial Packages",
    ];

    const teamMembers = [
  {
    name: "Dr. Naincy",
    role: "Clinical Director",
    qualification: "BHMS, MD (Homeopathy)",
    specialization: "Constitutional Homeopathy, Chronic Dermatoses, Alopecia Revision & Women's Health",
    experience: "11+ Years Clinical Practice",
    image: "/nancy.webp", // replace with actual image path
    bio: "Guiding the clinical vision at AG Aesthetics & Wellness Clinic, Dr. Naincy integrates holistic, constitutional protocols with modern dermal diagnostics. She focuses on treating chronic skin pathologies, stubborn hair disorders, and underlying systemic imbalances through safe, personalized, and root-cause therapies.",
},
    {
    name: "Dr. Bismad Kaur",
    role: "Consultant Prosthodontist & Facial Aesthetic Specialist",
    qualification: "BDS, MDS (Prosthodontics & Implantology), M.Sc (Facial Aesthetics)",
    specialization: "Smile Designing, Full-Face Vector Balancing, Dental Implants & Facial Recontouring",
    experience: "Specialist Practitioner",
    image: "/bismad-kaur.jpeg", // replace with actual image path
    bio: "Uniting advanced prosthodontic architecture with specialized postgraduate training in facial aesthetics, Dr. Bismad Kaur specializes in comprehensive perioral harmony, smile makeovers, and non-surgical lower-face recontouring tailored to balanced anatomical proportions.",
},
       {
    name: "Dr. Jagmeet Bugga",
    role: "Facial Aesthetician & Clinical Cosmetologist",
    qualification: "BDS (BFUHS), Fellowship in Cosmetology & Aesthetic Medicine (FAM)",
    specialization: "Facial Rejuvenation, Neuromodulators, CO2 Fractional & Regenerative Hair Therapies",
    experience: "4+ Years Clinical Experience",
    image: "/jagmeet-bugga.JPG", // replace with actual image path
    bio: "Combining a meticulous background in maxillofacial oral anatomy with advanced clinical aesthetic training, Dr. Bugga specializes in facial harmony, minimally invasive skin resurfacing, and autologous cellular treatments such as PRP and GFC.",
}
    ];

    return (
        <main className="min-h-screen">
            {/* 1. Practice Introduction Header */}
            <section className="pt-16 sm:pt-24 pb-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <span className="text-[11px] uppercase tracking-[0.22em] text-[#6E806B] block mb-3">
                            Clinical Cosmetology &bull; Kharar &bull; Greater Mohali
                        </span>
                        <h1 className="text-3xl sm:text-5xl text-[#1E251D] tracking-tight leading-tight">
                            Anatomical Precision. <br />
                            Ethical Aesthetic Medicine.
                        </h1>
                        <p className="mt-4 text-sm sm:text-base text-[#566553] leading-relaxed">
                            AG Aesthetics &amp; Wellness Clinic was established to bring hospital-grade sterility, physician-led diagnostics, and understated, natural aesthetic outcomes to Kharar without exaggerated commercial claims.
                        </p>
                    </div>

                    {/* Clinical Assurance Strip */}
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t border-[#F0ECE3]">
                        {credentials.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2.5 text-xs text-[#334031]">
                                <CheckCircle2 className="w-4 h-4 text-[#5F7859] shrink-0" />
                                <span className="font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. Primary Photo & Clinic Philosophy Section */}
            <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    {/* Main Clinic Imagery */}
                    <div className="lg:col-span-6 relative aspect-4/3 rounded-3xl overflow-hidden bg-stone-200">
                        <Image
                            src="/clinic.jpg"
                            alt="AG Aesthetics Consultation Suite Kharar"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 text-xs text-[#242C23] flex items-center justify-between">
                            <div>
                                <p className="font-semibold">The Kharar Practice</p>
                                <p className="text-[11px] text-[#6A7C67]">SCO 6, 1st Floor, Radiola Road</p>
                            </div>
                            <span className="text-[10px] bg-[#EFECE5] px-2.5 py-1 rounded-md text-[#3F4F3D]">
                                OPD Open
                            </span>
                        </div>
                    </div>

                    {/* Philosophy Statement */}
                    <div className="lg:col-span-6 space-y-6">
                        <span className="text-xs uppercase tracking-[0.2em] text-[#6E806B]">
                            Our Clinical Philosophy
                        </span>
                        <h2 className="text-2xl sm:text-4xl text-[#1E251D] leading-snug">
                            We Treat Skin &amp; Hair as Biological Systems, Never Commodities.
                        </h2>
                        <div className="space-y-4 text-xs sm:text-sm text-[#4E5E4C] leading-relaxed">
                            <p>
                                Aesthetic procedures have too often been reduced to rushed salon experiences and aggressive sales packages. At AG Aesthetics, every visit begins with high-resolution skin evaluation, analyzing dermal thickness, moisture barrier integrity, and vascular reactivity.
                            </p>
                            <p>
                                We do not sell pre-bundled packages that you do not require. Whether mapping subcision for stubborn acne scars, initiating autologous GFC hair regrowth, or softening persistent forehead creases, our procedures are delivered in deliberate, measurable stages.
                            </p>
                        </div>

                        <div className="pt-2">
                            <Link
                                href="/treatments"
                                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#242C23] border-b border-[#242C23] pb-1 hover:text-[#5F7859] hover:border-[#5F7859] transition-colors"
                            >
                                <span>Explore Treatment Protocols</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Four Clinical Foundations Grid */}
            <section className="py-16 bg-[#F3F2EB]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mb-12">
                        <span className="text-[11px] uppercase tracking-[0.2em] text-[#6E806B] block mb-2">
                            Clinical Standards
                        </span>
                        <h2 className="text-2xl sm:text-3xl text-[#1E251D]">
                            Built Around Predictable Patient Safety
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {clinicalPillars.map((item) => (
                            <div
                                key={item.id}
                                className="p-7 rounded-2xl bg-white flex flex-col justify-between transition-colors"
                            >
                                <div className="w-10 h-10 rounded-xl bg-[#F0ECE3] flex items-center justify-center mb-6">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-[#1E251D] tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2.5 text-xs text-[#556453] leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Individual Doctor Profiles Section */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-12">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#6E806B] block mb-2">
                        Medical Team
                    </span>
                    <h2 className="text-3xl sm:text-4xl text-[#1E251D]">
                        Consult With Our Qualified Clinicians
                    </h2>
                    <p className="mt-3 text-xs sm:text-sm text-[#556453] leading-relaxed">
                        Every medical aesthetic intervention at AG Aesthetics is directly diagnosed, planned, and administered by qualified physicians specializing in clinical dermatology, laser surgery, and trichology.
                    </p>
                </div>

                {/* Team Grid (1 Director + 2 Doctors) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, idx) => (
                        <article
                            key={idx}
                            className="bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all flex flex-col"
                        >
                            {/* Doctor Portrait */}
                            <div className="relative aspect-4/5 w-full bg-stone-100 overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover object-top hover:scale-102 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute top-3.5 right-3.5">
                                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[10px] tracking-wider uppercase text-[#3A4638] border border-[#E0DDD5]">
                                        {member.experience}
                                    </span>
                                </div>
                            </div>

                            {/* Bio & Credentials Details */}
                            <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-4">
                                <div>
                                    <h3 className="text-xl text-[#1E251D] tracking-tight font-medium">
                                        {member.name}
                                    </h3>
                                    <p className="text-xs text-[#5D7A58] font-medium mt-0.5">
                                        {member.role}
                                    </p>

                                    <div className="flex items-center gap-2 text-[11px] text-[#788875] mt-2 pt-2 border-t border-[#F2EFE8]">
                                        <GraduationCap className="w-3.5 h-3.5 shrink-0" />
                                        <span>{member.qualification}</span>
                                    </div>

                                    <p className="mt-3 text-xs text-[#50604E] leading-relaxed">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* 5. Editorial Booking Banner */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="relative rounded-3xl overflow-hidden bg-[#242C23] text-white p-8 sm:p-14 border border-[#3A4937]">
                    {/* Background Treatment Image */}
                    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                        <Image
                            src="/5.png"
                            alt="AG Aesthetics Suite"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-r from-[#242C23] via-[#242C23]/95 to-transparent" />
                    </div>

                    <div className="relative z-10 max-w-xl space-y-4">
                        <span className="text-[10px] tracking-[0.25em] uppercase text-[#A3B89E] block">
                            Ethical Aesthetic Guidance
                        </span>
                        <h2 className="text-2xl sm:text-4xl tracking-tight text-[#F6F4EE]">
                            Schedule Your Skin or Hair Evaluation
                        </h2>
                        <p className="text-xs sm:text-sm text-[#B4C6B1] leading-relaxed">
                            We never recommend procedures you do not need. Meet with our clinical doctors in Kharar for an objective baseline assessment and realistic recovery timelines.
                        </p>

                        <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                            <Link
                                href="/appointments"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F6F4EE] text-[#1E251D] text-xs font-semibold hover:bg-white transition-all active:scale-95"
                            >
                                <span>Book your slot</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>

                            <Link
                                href="/treatments"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#485C45] text-[#E5E9E2] text-xs font-medium hover:bg-[#2C372B] transition-colors"
                            >
                                Browse Treatments
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}