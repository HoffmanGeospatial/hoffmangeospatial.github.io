// get the ninja-keys element
ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-certificates",
          title: "Certificates",
          description: "A few of the Certificates I have earned over the years.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/certificates/";
          },
        },{id: "nav-faq",
          title: "FAQ",
          description: "Last Updated: 3/03/25",
          section: "Navigation",
          handler: () => {
            window.location.href = "/faq/";
          },
        },{id: "nav-resumé-cv",
          title: "Resumé/CV",
          description: "As of February 2025.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-w3-school",
              title: "W3 School",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/w3school/";
              },
            },{id: "dropdown-esri-academy",
              title: "ESRI Academy",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/esri/";
              },
            },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "certificates-arcgis-python-scripting",
          title: 'ArcGIS Python Scripting',
          description: "Issued by LinkedIn Learning Academy",
          section: "Certificates",handler: () => {
              window.location.href = "/certificates/ArcGIS_Python/";
            },},{id: "certificates-cisa-critical-infrastructure",
          title: 'CISA Critical Infrastructure',
          description: "Issued by the U.S. Department of Homeland Security - Cybersecurity and Infrastructure Security Agency (CISA)",
          section: "Certificates",handler: () => {
              window.location.href = "/certificates/CISA_CIP/";
            },},{id: "certificates-cisa-ransomware",
          title: 'CISA Ransomware',
          description: "Issued by the U.S. Department of Homeland Security - Cybersecurity and Infrastructure Security Agency (CISA)",
          section: "Certificates",handler: () => {
              window.location.href = "/certificates/CISA_Ransomware/";
            },},{id: "certificates-certified-peer-reviewer",
          title: 'Certified Peer Reviewer',
          description: "Issued by the Elsevier Researcher Academy",
          section: "Certificates",handler: () => {
              window.location.href = "/certificates/Elsevier_PR/";
            },},{id: "certificates-fema-apps",
          title: 'FEMA Apps',
          description: "Issued by the U.S. Department of Homeland Security - FEMA Emergency Management Institute",
          section: "Certificates",handler: () => {
              window.location.href = "/certificates/FEMA_Apps/";
            },},{id: "certificates-fema-gii",
          title: 'FEMA GII',
          description: "Issued by the U.S. Department of Homeland Security - FEMA Emergency Management Institute",
          section: "Certificates",handler: () => {
              window.location.href = "/certificates/FEMA_GII/";
            },},{id: "certificates-fema-gisp",
          title: 'FEMA GISP',
          description: "Issued by the U.S. Department of Homeland Security - FEMA Emergency Management Institute",
          section: "Certificates",handler: () => {
              window.location.href = "/certificates/FEMA_GISP/";
            },},{id: "certificates-graduate-certificate-in-gis",
          title: 'Graduate Certificate in GIS',
          description: "Issued by the Center for Geospatial Analytics at NC State University",
          section: "Certificates",handler: () => {
              window.location.href = "/certificates/GC/";
            },},{id: "certificates-nasa-tops-open-science",
          title: 'NASA TOPS Open Science',
          description: "Issued by NASA Transform to Open Science (TOPS) Program",
          section: "Certificates",handler: () => {
              window.location.href = "/certificates/NASA_TOPS/";
            },},{id: "certificates-geodesy-and-mapping",
          title: 'Geodesy and Mapping',
          description: "Issued by the University Corporation for Atmospheric Research (UCAR)",
          section: "Certificates",handler: () => {
              window.location.href = "/certificates/NGA_Geodesy/";
            },},{id: "news-i-was-invited-by-the-tops-team-at-nasa-to-join-their-newly-launched-open-science-101-program",
          title: 'I was invited by the TOPS team at NASA to join their newly...',
          description: "",
          section: "News",},{id: "news-i-sat-for-and-passed-the-gisci-gisp-technical-professional-certification-exam",
          title: 'I sat for and passed the GISCI GISP Technical Professional Certification Exam.',
          description: "",
          section: "News",},{id: "news-i-completed-the-nasa-tops-open-science-program",
          title: 'I completed the NASA TOPS Open Science program!',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
