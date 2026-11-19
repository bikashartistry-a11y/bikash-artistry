/**
 * =========================================================================
 * BIKASH ARTISTRY - PORTFOLIO CONTENT DATA
 * =========================================================================
 * You can easily update texts, experience, skills, video paths, and contact
 * details here without needing to modify the HTML structure.
 * =========================================================================
 */

var PORTFOLIO_DATA = {
  // 1. BRANDING & HERO
  hero: {
    fullName: "BIKASH BARMAN",
    brandName: "BIKASH ARTISTRY",
    taglineBadge: "2D ANIMATOR • TRADITIONAL PORTRAIT ARTIST",
    taglineSingle: "12 FPS Frame-by-Frame 2D Animation • Charcoal & Graphite Realism",
    summary: "Infusing dark atmospheric intensity into 12 frames-per-second character animation, forged with over 5 years of mastery in deep charcoal and graphite portraiture.",
    stats: [
      { number: "1.5+", label: "Years in 2D Animation" },
      { number: "5+", label: "Years Traditional Art" },
      { number: "12", label: "FPS Hand-Drawn Flow" }
    ],
    ctaPrimary: { label: "Watch 12 FPS Shorts", href: "#works" },
    ctaSecondary: { label: "View Experience", href: "#experience" }
  },

  // 2. ABOUT ME
  about: {
    sectionTag: "Artist Profile",
    title: "About Me",
    subtitle: "Passion Forged in Discipline & Dark Frames",
    bio: "I'm Bikash Barman, a 17-year-old (turning 18 soon) artist and 2D animator based in Siliguri, West Bengal. Currently in Class 12 and gearing up for college next year, I am dedicating focused discipline to hit my biggest academic milestone yet—aiming for 90%+ in board exams for the very first time. Parallel to my studies, my heart and full-time creative passion live in the realm of 12 FPS frame-by-frame 2D animation and traditional charcoal & graphite portraiture, constantly inspired and fueled by the cinematic storytelling of anime.",
    quickInfo: [
      {
        label: "Full Name",
        value: "Bikash Barman",
        detail: "Artist behind Bikash Artistry"
      },
      {
        label: "Age & Academic Focus",
        value: "17 (Turning 18 Soon)",
        detail: "Class 12 Student (Aiming for 90%+ & College Next Year)"
      },
      {
        label: "Location",
        value: "Siliguri, West Bengal",
        detail: "India • Open for Projects"
      },
      {
        label: "Hobby & Full-Time Passion",
        value: "Watching Anime",
        detail: "12 FPS Frame-by-Frame 2D Animation & Traditional Portrait Art"
      }
    ]
  },

  // 3. WORK EXPERIENCE TIMELINE
  experience: [
    {
      role: "2D Digital Animator",
      period: "Last 1.5 Years – Present",
      focus: "12 FPS Frame-by-Frame & Character Dynamics",
      summary: "Specializing in high-intensity 12 FPS frame-by-frame character acting, dynamic action sequences, and luminous optical effects in Clip Studio Paint.",
      highlights: [
        "12 FPS frame-by-frame character animation with clean timing & spacing",
        "Expressive character acting, facial emotions & dark atmospheric storytelling",
        "Dynamic action poses, weight distribution & expressive momentum",
        "Glow-line FX and atmospheric lighting composited for dramatic impact"
      ],
      tags: ["Clip Studio Paint", "12 FPS Animation", "Action Poses", "FX Animation"]
    },
    {
      role: "Traditional Sketch & Portrait Artist",
      period: "5+ Years Experience",
      focus: "Charcoal, Graphite & Anatomical Realism",
      summary: "Dedicated traditional studio practice crafting hyper-expressive portraits with meticulous control over tonal depth, contrast, and facial emotion.",
      highlights: [
        "Realistic hand-drawn portraits capturing authentic human emotion",
        "Detailed shading, soft transitions & high-contrast chiaroscuro values",
        "Facial anatomy studies using raw charcoal and graphite mediums",
        "Form construction from rough preliminary gesture to hyper-detailed finish"
      ],
      tags: ["Charcoal", "Graphite", "Facial Anatomy", "Hyper-Realistic Shading"]
    }
  ],

  // 3. SKILLS & SOFTWARE
  skills: [
    {
      name: "Clip Studio Paint",
      category: "Software & Digital Tools",
      level: "Primary Production Suite",
      description: "Timeline orchestration, vector lineart, light table timing & 12 FPS animation cels."
    },
    {
      name: "12 FPS Frame-by-Frame 2D Animation",
      category: "Core Animation",
      level: "Specialized Discipline",
      description: "12 FPS keyframing, arcs, anticipation, breakdowns, in-betweens, and visceral action timing."
    },
    {
      name: "Character Turnarounds",
      category: "Animation & Design",
      level: "Structural Mastery",
      description: "Consistent volumetric mass and accurate 360-degree head and body rotations."
    },
    {
      name: "Glow Lineart & FX",
      category: "Visual Effects",
      level: "Stylized Aesthetics",
      description: "Luminous neon-crimson lineart, energy streaks, blood trails, and optical flares."
    },
    {
      name: "Video Compositing (CapCut)",
      category: "Post-Production",
      level: "Editing & Sound Design",
      description: "Video pacing, audio sync, sound effects matching, color grading & 9:16 formatting."
    },
    {
      name: "Charcoal Portraits",
      category: "Traditional Medium",
      level: "5+ Years Mastery",
      description: "Deep velvety blacks, dramatic rim lighting, smudging, and textural contrast."
    },
    {
      name: "Graphite Sketching",
      category: "Traditional Medium",
      level: "5+ Years Mastery",
      description: "Graded pencil work (2H to 8B), fine cross-hatching, and crisp edge control."
    },
    {
      name: "Realistic Shading",
      category: "Artistic Technique",
      level: "Advanced Rendering",
      description: "Subtle specular highlights, ambient occlusion, reflected light & smooth gradients."
    },
    {
      name: "Facial Anatomy",
      category: "Foundations",
      level: "Structural Anatomy",
      description: "Skull landmarks, planar head construction, micro-expressions, and eye realism."
    }
  ],

  // 4. SELECTED ANIMATION SHORTS (Autoplay 9:16 Vertical Grid)
  animationShorts: [
    {
      id: "guilt-animation",
      title: "GUILT ANIMATION CLIP",
      videoFile: "GUILT ANIMATION CLIP.mp4",
      fallbackVideo: "guilt-animation-clip.mp4",
      aspectRatio: "9:16",
      tag: "12 FPS Original Short",
      description: "Atmospheric, psychological 12 FPS frame-by-frame character scene exploring remorse and darkness."
    },
    {
      id: "diwali-animation",
      title: "DIWALI SPECIAL ANIMATION",
      videoFile: "DIWALI SPECIAL ANIMATION.mp4",
      fallbackVideo: "diwali-special-animation.mp4",
      aspectRatio: "9:16",
      tag: "12 FPS Seasonal Action",
      description: "Explosive dynamic 12 FPS motion study combining traditional light bursts with stylized 2D choreography."
    },
    {
      id: "sleep-paralysis",
      title: "SLEEP PARALYSIS",
      videoFile: "SLEEP PARALYSIS.mp4",
      fallbackVideo: "sleep-paralysis.mp4",
      aspectRatio: "9:16",
      tag: "12 FPS Horror Motion",
      description: "Visceral horror 12 FPS motion depicting nocturnal dread, shadowy silhouettes, and spine-chilling suspense."
    }
  ],

  // 5. CONTACT & FOOTER
  contact: {
    location: "Siliguri, West Bengal",
    email: "bikashartistry@gmail.com",
    instagramHandle: "@bikash.artistry_",
    instagramUrl: "https://instagram.com/bikash.artistry_",
    artistStatement: "Available for freelance 12 FPS 2D animation, commission portraits, character design, and commercial storyboard projects."
  }
};

// Ensure it is bound to global window in all browser contexts
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
