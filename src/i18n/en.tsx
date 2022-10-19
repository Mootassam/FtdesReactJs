const en = {
  common: {
    or: "or",
    cancel: "Cancel",
    reset: "Reset",
    save: "Save",
    search: "Search",
    edit: "Edit",
    remove: "Remove",
    new: "New",
    export: "Export to Excel",
    noDataToExport: "No data to export",
    import: "Import",
    discard: "Discard",
    yes: "Yes",
    no: "No",
    pause: "Pause",
    areYouSure: "Are you sure?",
    view: "View",
    destroy: "Delete",
    mustSelectARow: "Must select a row",
    filters: "Filters",
    Menue: "menu",
    propos: "About",
    Publications: "Publications",
    Archives: "Archives",
    Glossaire: "Glossary",
    Evènements: "Events",
    Tableau: "Dashboard",
    Médiathèque: "Media library",
    Contact: "Contact",
    recherche: "Search",
  },

  app: {
    title: "Application",
  },

  api: {
    menu: "API",
  },
  menu: {
    Menue: "Menu",
    propos: "About",
    Publications: "Publications",
    Archives: "Archives",
    Glossaire: "Glossary",
    Evènements: "Events",
    Tableau: "Dashboard",
    Médiathèque: "Media library",
    Contact: "Contact",
    suggerer_des_donnees: "Suggest content",
    profile: "Profile",
    demander_d_appui: "Request for support",
    favoris: "Favorites",
    deconnexion: "Logout",
    espace_membre: "Member area",
    contenu: "contents",
    demande_appui: "Request for support",
    contenu_recent: "RECENT CONTENT",
    contenus: "contents",
    suggerer_de_contenu: "Suggest content",
    recherche: "research",
    submenu: {
      Communiqués: "Releases",
      Articles: "Items",
      Etudes: "Studies",
      Cahiers: "Notebooks",
      Appels: "calls",
      Vidéos: "Videos",
      Podcast: "Podcast",
      Photos: "Pictures",
      Documentaires: "Documentaries",
      Autres: "Others",
    },
  },
  buttons: {
    chercher: "look for",
    filtrer: "filter",
  },
  entities: {
    publication: {
      name: "publication",
      label: "Publications",
      menu: "Publications",
      exporterFileName: "publication_export",
      list: {
        menu: "Publications",
        title: "Publications",
      },
      create: {
        success: "Publication successfully saved",
      },
      update: {
        success: "Publication successfully saved",
      },
      destroy: {
        success: "Publication successfully deleted",
      },
      destroyAll: {
        success: "Publication(s) successfully deleted",
      },
      edit: {
        title: "Edit Publication",
      },
      fields: {
        id: "Id",
        thematique: "Thematique",
        categorie: "Categorie",
        type: "Type",
        supports: "Supports",
        description: "Description",
        statut: "Statut",
        dateRange: "Date",
        date: "Date",
        createdAt: "Created at",
        updatedAt: "Updated at",
        createdAtRange: "Created at",
      },
      enumerators: {
        categorie: {
          Manifestation: "Manifestation",
          "article scientifique": "Article scientifique",
          "article journalistique": "Article journalistique",
          rapport: "Rapport",
          entretien: "Entretien",
          "données numériques": "Données numériques",
          autre: "Other",
        },
        type: {
          Texte: "Text",
          audio: "Audio",
          vidéo: "Video",
          "lien web": "Lien web",
          photo: "Photo",
          infographie: "Infographics",
          statistiques: "Statistics",
          autre: "Other",
        },
        statut: {
          archive: "Archive",
          en_attente: "Pending",
          valide: "Valid",
          rejete: "Rejected",
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: "New Publication",
      },
      view: {
        title: "View Publication",
      },
      importer: {
        title: "Import Publications",
        fileName: "publication_import_template",
        hint: "Files/Images columns must be the URLs of the files separated by space.",
      },
    },

    forum: {
      name: "forum",
      label: "Forums",
      menu: "Forums",
      exporterFileName: "forum_export",
      list: {
        menu: "Forums",
        title: "Forums",
      },
      create: {
        success: "Forum successfully saved",
      },
      update: {
        success: "Forum successfully saved",
      },
      destroy: {
        success: "Forum successfully deleted",
      },
      destroyAll: {
        success: "Forum(s) successfully deleted",
      },
      edit: {
        title: "Edit Forum",
      },
      fields: {
        id: "Id",
        title: "Titre",
        sujet: "Sujet",
        visibilite: "Visibilite",
        statut: "Statut",
        createdAt: "Created at",
        updatedAt: "Updated at",
        createdAtRange: "Created at",
      },
      enumerators: {
        visibilite: {
          Ouverte: "Ouverte",
          Fermee: "Fermee",
        },
        statut: {
          en_attente: "en_attente",
          valide: "Valide",
          rejete: "Rejete",
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: "New Forum",
      },
      view: {
        title: "View Forum",
      },
      importer: {
        title: "Import Forums",
        fileName: "forum_import_template",
        hint: "Files/Images columns must be the URLs of the files separated by space.",
      },
    },

    demandeAppui: {
      name: "demandeAppui",
      label: "DemandeAppuis",
      menu: "DemandeAppuis",
      exporterFileName: "demandeAppui_export",
      list: {
        menu: "DemandeAppuis",
        title: "DemandeAppuis",
      },
      create: {
        success: "DemandeAppui successfully saved",
      },
      update: {
        success: "DemandeAppui successfully saved",
      },
      destroy: {
        success: "DemandeAppui successfully deleted",
      },
      destroyAll: {
        success: "DemandeAppui(s) successfully deleted",
      },
      edit: {
        title: "Edit DemandeAppui",
      },
      fields: {
        id: "Id",
        type: "Type",
        etat: "Etat",
        gouvernorat: "Gouvernorat",
        importance: "Importance",
        description: "Description",
        supports: "Supports",
        createdAt: "Created at",
        categorie: "Categorie",
        updatedAt: "Updated at",
        createdAtRange: "Created at",
        email: "Email",
        phoneNumber: "Phone Number",
        personne: "Personne",
      },
      enumerators: {
        type: {
          Legal: "Legal",
          logistique: "Logistique",
        },
        etat: {
          En_ligne: "En_ligne",
          physique: "Physique",
        },
        gouvernorat: {
          tunis: "Tunis",
          ariana: "Ariana",
          beja: "Beja",
          ben_arouss: "Ben_arouss",
          bizerte: "Bizerte",
          gabes: "Gabes",
          gafsa: "Gafsa",
          jendouba: "Jendouba",
          kairouan: "Kairouan",
          kasserine: "Kasserine",
          kebili: "Kebili",
          kef: "Kef",
          mahdia: "Mahdia",
          manouba: "Manouba",
          medenine: "Medenine",
          monastir: "Monastir",
          nabeul: "Nabeul",
          sfax: "Sfax",
          sidi_bouzid: "Sidi_bouzid",
          siliana: "Siliana",
          sousse: "Sousse",
          tataouine: "Tataouine",
          tozeur: "Tozeur",
          zaghouan: "Zaghouan",
        },
        importance: {
          Haute: "Haute",
          modere: "Modere",
          normale: "Normale",
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: "New DemandeAppui",
      },
      view: {
        title: "View DemandeAppui",
      },
      importer: {
        title: "Import DemandeAppuis",
        fileName: "demandeAppui_import_template",
        hint: "Files/Images columns must be the URLs of the files separated by space.",
      },
    },

    evenement: {
      name: "evenement",
      label: "Evenements",
      menu: "Evenements",
      exporterFileName: "evenement_export",
      list: {
        menu: "Evenements",
        title: "Evenements",
      },
      create: {
        success: "Evenement successfully saved",
      },
      update: {
        success: "Evenement successfully saved",
      },
      destroy: {
        success: "Evenement successfully deleted",
      },
      destroyAll: {
        success: "Evenement(s) successfully deleted",
      },
      edit: {
        title: "Edit Evenement",
      },
      fields: {
        id: "Id",
        thematique: "Thematique",
        categorie: "Categorie",
        type: "Type",
        supports: "Supports",
        description: "Description",
        dateRange: "Date",
        date: "Date",
        statut: "Statut",
        emplacement: "Emplacement",
        createdAt: "Created at",
        updatedAt: "Updated at",
        createdAtRange: "Created at",
      },
      enumerators: {
        categorie: {
          Ceremonies: "Ceremonies",
          Manifestation: "Manifestation",
        },
        type: {
          texte: "Texte",
          audio: "Audio",
          vidéo: "Vidéo",
          lien_web: "Lien_web",
          photo: "Photo",
          infographie: "Infographie",
          statistiques: "Statistiques",
        },
        statut: {
          Archive: "Archive",
          en_attente: "en_attente",
          Valide: "Valide",
          Rejete: "Rejete",
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: "New Evenement",
      },
      view: {
        title: "View Evenement",
      },
      importer: {
        title: "Import Evenements",
        fileName: "evenement_import_template",
        hint: "Files/Images columns must be the URLs of the files separated by space.",
      },
    },

    thematique: {
      name: "thematique",
      label: "Thematiques",
      menu: "Thematiques",
      exporterFileName: "thematique_export",
      list: {
        menu: "Thematiques",
        title: "Thematiques",
      },
      create: {
        success: "Thematique successfully saved",
      },
      update: {
        success: "Thematique successfully saved",
      },
      destroy: {
        success: "Thematique successfully deleted",
      },
      destroyAll: {
        success: "Thematique(s) successfully deleted",
      },
      edit: {
        title: "Edit Thematique",
      },
      fields: {
        id: "Id",
        title: "Titre",
        description: "Description",
        tags: "Tags",
        createdAt: "Created at",
        updatedAt: "Updated at",
        createdAtRange: "Created at",
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: "New Thematique",
      },
      view: {
        title: "View Thematique",
      },
      importer: {
        title: "Import Thematiques",
        fileName: "thematique_import_template",
        hint: "Files/Images columns must be the URLs of the files separated by space.",
      },
    },

    tags: {
      name: "tags",
      label: "Tags",
      menu: "Tags",
      exporterFileName: "tags_export",
      list: {
        menu: "Tags",
        title: "Tags",
      },
      create: {
        success: "Tags successfully saved",
      },
      update: {
        success: "Tags successfully saved",
      },
      destroy: {
        success: "Tags successfully deleted",
      },
      destroyAll: {
        success: "Tags(s) successfully deleted",
      },
      edit: {
        title: "Edit Tags",
      },
      fields: {
        id: "Id",
        title: "Titre",
        description: "Description",
        createdAt: "Created at",
        updatedAt: "Updated at",
        createdAtRange: "Created at",
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: "New Tags",
      },
      view: {
        title: "View Tags",
      },
      importer: {
        title: "Import Tags",
        fileName: "tags_import_template",
        hint: "Files/Images columns must be the URLs of the files separated by space.",
      },
    },

    artiste: {
      name: "artiste",
      label: "Artistes",
      menu: "Artistes",
      exporterFileName: "artiste_export",
      list: {
        menu: "Artistes",
        title: "Artistes",
      },
      create: {
        success: "Artiste successfully saved",
      },
      update: {
        success: "Artiste successfully saved",
      },
      destroy: {
        success: "Artiste successfully deleted",
      },
      destroyAll: {
        success: "Artiste(s) successfully deleted",
      },
      edit: {
        title: "Edit Artiste",
      },
      fields: {
        id: "Id",
        nom: "Nom",
        prenom: "Prenom",
        domaine: "Domaine",
        adresse: "Adresse",
        email: "Email",
        phoneNumberRange: "PhoneNumber",
        phoneNumber: "PhoneNumber",
        espaceArtistique: "EspaceArtistique",
        createdAt: "Created at",
        updatedAt: "Updated at",
        createdAtRange: "Created at",
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: "New Artiste",
      },
      view: {
        title: "View Artiste",
      },
      importer: {
        title: "Import Artistes",
        fileName: "artiste_import_template",
        hint: "Files/Images columns must be the URLs of the files separated by space.",
      },
    },

    espaceArtistique: {
      name: "espaceArtistique",
      label: "EspaceArtistiques",
      menu: "EspaceArtistiques",
      exporterFileName: "espaceArtistique_export",
      list: {
        menu: "EspaceArtistiques",
        title: "EspaceArtistiques",
      },
      create: {
        success: "EspaceArtistique successfully saved",
      },
      update: {
        success: "EspaceArtistique successfully saved",
      },
      destroy: {
        success: "EspaceArtistique successfully deleted",
      },
      destroyAll: {
        success: "EspaceArtistique(s) successfully deleted",
      },
      edit: {
        title: "Edit EspaceArtistique",
      },
      fields: {
        id: "Id",
        artiste: "Artiste",
        supports: "Supports",
        title: "Titre",
        description: "Description",
        createdAt: "Created at",
        updatedAt: "Updated at",
        createdAtRange: "Created at",
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: "New EspaceArtistique",
      },
      view: {
        title: "View EspaceArtistique",
      },
      importer: {
        title: "Import EspaceArtistiques",
        fileName: "espaceArtistique_import_template",
        hint: "Files/Images columns must be the URLs of the files separated by space.",
      },
    },
  },

  auth: {
    tenants: "Workspaces",
    profile: {
      title: "Profile",
      success: "Profile successfully updated",
    },
    createAnAccount: "Create an account",
    rememberMe: "Remember me",
    forgotPassword: "Forgot password",
    signin: "Sign in",
    signup: "Sign up",
    signout: "Sign out",
    alreadyHaveAnAccount: "Login.",
    already: "Already registered?",
    HaveAnAccount: "Not a member yet?",
    social: {
      errors: {
        "auth-invalid-provider":
          "This email is already registered to another provider.",
        "auth-no-email": `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount: "Sign in with another account",
    passwordChange: {
      title: "Change Password",
      success: "Password successfully changed",
      mustMatch: "Passwords must match",
    },
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: "Send password reset email",
      error: `Email not recognized`,
    },
    passwordReset: {
      message: "Reset password",
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: "Email successfully verified.",
      message: "Just a moment, your email is being verified...",
    },
  },

  tenant: {
    name: "tenant",
    label: "Workspaces",
    menu: "Workspaces",
    list: {
      menu: "Workspaces",
      title: "Workspaces",
    },
    create: {
      button: "Create Workspace",
      success: "Workspace successfully saved",
    },
    update: {
      success: "Workspace successfully saved",
    },
    destroy: {
      success: "Workspace successfully deleted",
    },
    destroyAll: {
      success: "Workspace(s) successfully deleted",
    },
    edit: {
      title: "Edit Workspace",
    },
    fields: {
      id: "Id",
      name: "Name",
      url: "URL",
      tenantName: "Workspace Name",
      tenantId: "Workspace",
      tenantUrl: "Workspace URL",
      plan: "Plan",
    },
    enumerators: {},
    new: {
      title: "New Workspace",
    },
    invitation: {
      view: "View Invitations",
      invited: "Invited",
      accept: "Accept Invitation",
      decline: "Decline Invitation",
      declined: "Invitation successfully declined",
      acceptWrongEmail: "Accept Invitation With This Email",
    },
    select: "Select Workspace",
    validation: {
      url: "Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).",
    },
  },

  roles: {
    admin: {
      label: "Admin",
      description: "Full access to all resources",
    },
    custom: {
      label: "Custom Role",
      description: "Custom access to resources",
    },
  },

  user: {
    invite: "Invite",
    title: "Users",
    menu: "Users",
    fields: {
      id: "Id",
      avatars: "Avatar",
      email: "Email",
      emails: "Email(s)",
      fullName: "Name",
      firstName: "First Name",
      lastName: "Last Name",
      status: "Status",
      phoneNumber: "Phone Number",
      role: "Role",
      fonction: "Fonction",
      occupation: "Occupation",
      pays: "Country",
      region: "Region",
      createdAt: "Created at",
      updatedAt: "Updated at",
      roleUser: "Role/User",
      roles: "Roles",
      createdAtRange: "Created at",
      password: "Password",
      rememberMe: "Remember me",
      oldPassword: "Old Password",
      newPassword: "New Password",
      newPasswordConfirmation: "New Password Confirmation",
    },
    enumerators: {
      pays: {
        Afghanistan: "Afghanistan",
        Albania: "Albania",
        Algeria: "Algeria",
        Andorra: "Andorra",
        Angola: "Angola",
        Antigua_and_Barbuda: "Antigua and Barbuda",
        Argentina: "Argentina",
        Armenia: "Armenia",
        Australia: "Australia",
        Austria: "Austria",
        Azerbaijan: "Azerbaijan",
        The_Bahamas: "The Bahamas",
        Bahrain: "Bahrain",
        Bangladesh: "Bangladesh",
        Barbados: "Barbados",
        Belarus: "Belarus",
        Belgium: "Belgium",
        Belize: "Belize",
        Benin: "Benin",
        Bhutan: "Bhutan",
        Bolivia: "Bolivia",
        Bosnia_and_Herzegovina: "Bosnia and Herzegovina",
        Botswana: "Botswana",
        Brazil: "Brazil",
        Brunei: "Brunei",
        Bulgaria: "Bulgaria",
        Burkina_Faso: "Burkina Faso",
        Burundi: "Burundi",
        Cabo_Verde: "Cabo Verde",
        Cambodia: "Cambodia",
        Cameroon: "Cameroon",
        Canada: "Canada",
        Central_African_Republic: "Central African Republic",
        Chad: "Chad",
        Chile: "Chile",
        China: "China",
        Colombia: "Colombia",
        Comoros: "Comoros",
        "Congo,_Democratic_Republic_of_the":
          "Congo, Democratic Republic of the",
        "Congo,_Republic_of_the": "Congo, Republic of the",
        Costa_Rica: "Costa Rica",
        "Côte_d’Ivoire": "Côte d’Ivoire",
        Croatia: "Croatia",
        Cuba: "Cuba",
        Cyprus: "Cyprus",
        Czech_Republic: "Czech Republic",
        Denmark: "Denmark",
        Djibouti: "Djibouti",
        Dominica: "Dominica",
        Dominican_Republic: "Dominican Republic",
        "East_Timor_(Timor-Leste)": "East Timor (Timor-Leste)",
        Ecuador: "Ecuador",
        Egypt: "Egypt",
        El_Salvador: "El Salvador",
        Equatorial_Guinea: "Equatorial Guinea",
        Eritrea: "Eritrea",
        Estonia: "Estonia",
        Eswatini: "Eswatini",
        Ethiopia: "Ethiopia",
        Fiji: "Fiji",
        Finland: "Finland",
        France: "France",
        Gabon: "Gabon",
        The_Gambia: "The Gambia",
        Georgia: "Georgia",
        Germany: "Germany",
        Ghana: "Ghana",
        Greece: "Greece",
        Grenada: "Grenada",
        Guatemala: "Guatemala",
        Guinea: "Guinea",
        "Guinea-Bissau": "Guinea-Bissau",
        Guyana: "Guyana",
        Haiti: "Haiti",
        Honduras: "Honduras",
        Hungary: "Hungary",
        Iceland: "Iceland",
        India: "India",
        Indonesia: "Indonesia",
        Iran: "Iran",
        Iraq: "Iraq",
        Ireland: "Ireland",
        Italy: "Italy",
        Jamaica: "Jamaica",
        Japan: "Japan",
        Jordan: "Jordan",
        Kazakhstan: "Kazakhstan",
        Kenya: "Kenya",
        Kiribati: "Kiribati",
        "Korea,_North": "North Korea",
        "Korea,_South": "South Korea",
        Kosovo: "Kosovo",
        Kuwait: "Kuwait",
        Kyrgyzstan: "Kyrgyzstan",
        Laos: "Laos",
        Latvia: "Latvia",
        Lebanon: "Lebanon",
        Lesotho: "Lesotho",
        Liberia: "Liberia",
        Libya: "Libya",
        Liechtenstein: "Liechtenstein",
        Lithuania: "Lithuania",
        Luxembourg: "Luxembourg",
        Madagascar: "Madagascar",
        Malawi: "Malawi",
        Malaysia: "Malaysia",
        Maldives: "Maldives",
        Mali: "Mali",
        Malta: "Malta",
        Marshall_Islands: "Marshall Islands",
        Mauritania: "Mauritania",
        Mauritius: "Mauritius",
        Mexico: "Mexico",
        Micronesia: "Micronesia",
        Moldova: "Moldova",
        Monaco: "Monaco",
        Mongolia: "Mongolia",
        Montenegro: "Montenegro",
        Morocco: "Morocco",
        Mozambique: "Mozambique",
        "Myanmar_(Burma)": "Myanmar (Burma)",
        Namibia: "Namibia",
        Nauru: "Nauru",
        Nepal: "Nepal",
        Netherlands: "Netherlands",
        New_Zealand: "New Zealand",
        Nicaragua: "Nicaragua",
        Niger: "Niger",
        Nigeria: "Nigeria",
        North_Macedonia: "North Macedonia",
        Norway: "Norway",
        Oman: "Oman",
        Pakistan: "Pakistan",
        Palau: "Palau",
        Panama: "Panama",
        Papua_New_Guinea: "Papua New Guinea",
        Paraguay: "Paraguay",
        Peru: "Peru",
        Philippines: "Philippines",
        Poland: "Poland",
        Portugal: "Portugal",
        Qatar: "Qatar",
        Romania: "Romania",
        Russia: "Russia",
        Rwanda: "Rwanda",
        Saint_Kitts_and_Nevis: "Saint Kitts and Nevis",
        Saint_Lucia: "Saint Lucia",
        Saint_Vincent_and_the_Grenadines: "Saint Vincent and the Grenadines",
        Samoa: "Samoa",
        San_Marino: "San Marino",
        Sao_Tome_and_Principe: "Sao Tome and Principe",
        Saudi_Arabia: "Saudi Arabia",
        Senegal: "Senegal",
        Serbia: "Serbia",
        Seychelles: "Seychelles",
        Sierra_Leone: "Sierra Leone",
        Singapore: "Singapore",
        Slovakia: "Slovakia",
        Slovenia: "Slovenia",
        Solomon_Islands: "Solomon Islands",
        Somalia: "Somalia",
        South_Africa: "South Africa",
        Spain: "Spain",
        Sri_Lanka: "Sri Lanka",
        Sudan: "Sudan",
        "Sudan,_South": "Sudan, South",
        Suriname: "Suriname",
        Sweden: "Sweden",
        Switzerland: "Switzerland",
        Syria: "Syria",
        Taiwan: "Taiwan",
        Tajikistan: "Tajikistan",
        Tanzania: "Tanzania",
        Thailand: "Thailand",
        Togo: "Togo",
        Tonga: "Tonga",
        Trinidad_and_Tobago: "Trinidad and Tobago",
        Tunisia: "Tunisia",
        Turkey: "Turkey",
        Turkmenistan: "Turkmenistan",
        Tuvalu: "Tuvalu",
        Uganda: "Uganda",
        Ukraine: "Ukraine",
        United_Arab_Emirates: "United Arab Emirates",
        United_Kingdom: "United Kingdom",
        United_States: "United States",
        Uruguay: "Uruguay",
        Uzbekistan: "Uzbekistan",
        Vanuatu: "Vanuatu",
        Vatican_City: "Vatican City",
        Venezuela: "Venezuela",
        Vietnam: "Vietnam",
        Yemen: "Yemen",
        Zambia: "Zambia",
        Zimbabwe: "Zimbabwe",
      },
      region: {
        tunis: `Gouvernorat de Tunis | ولاية تونس`,
        ariana: `Gouvernorat de L'Ariana | ولاية أريانة`,
        beja: `Gouvernorat de Béja | ولاية باجة`,
        ben_arouss: `Gouvernorat de Ben Arous | ولاية بن عروس`,
        bizerte: `Gouvernorat de Bizerte | ولاية بنزرت`,
        gabes: `Gouvernorat de Gabès | ولاية قابس`,
        gafsa: `Gouvernorat de Gafsa | ولاية قفصة`,
        jendouba: `Gouvernorat de Jendouba | ولاية جندوبة`,
        kairouan: `Gouvernorat de Kairouan | ولاية القيروان`,
        kasserine: `Gouvernorat de Kasserine | ولاية القصرين`,
        kebili: `Gouvernorat de Kebili | ولاية قبلي`,
        kef: `Gouvernorat de Le Kef | ولاية الكاف`,
        mahdia: `Gouvernorat de Mahdia | ولاية المهدية`,
        manouba: `Gouvernorat de La Manouba | ولاية منوبة`,
        medenine: `Gouvernorat de Medenine | ولاية مدنين`,
        monastir: `Gouvernorat de Monastir | ولاية المنستير`,
        nabeul: `Gouvernorat de Nabeul | ولاية نابل`,
        sfax: `Gouvernorat de Sfax | ولاية صفاقس`,
        sidi_bouzid: `Gouvernorat de Sidi Bouzid | ولاية سيدي بوزيد`,
        siliana: `Gouvernorat de Siliana | ولاية سليانة`,
        sousse: `Gouvernorat de Sousse | ولاية سوسة`,
        tataouine: `Gouvernorat de Tataouine | ولاية تطاوين`,
        tozeur: `Gouvernorat de Tozeur | ولاية توزر`,
        zaghouan: `Gouvernorat de Zaghouan | ولاية زغوان`,
      },
      fonction: {
        Journaliste: "Journaliste",
        Citoyen: "Citoyen",
        Chercheur: "Chercheur",
      },
      occupation: {
        Etudiant: "Etudiant",
        Universitaire: "Universitaire",
        Journalist: "Journalisme et Media",
        Societe_Civile: "Société Civile Locale",
        ONG_International: "ONG Internationale",
        Secteur_Public: "Secteur Public",
        Organisme_Recherche: "Organisme de Recherche",
        Mouvement_Social: "Mouvement Social",
        Mouvement_Artistique: "Mouvement Artistique",
        Entreprenariat_Social: "Entreprenariat Social",
        Secteur_Prive: "Secteur Privé",
        Activiste_Independant: "Activiste Indépendant",
        Avocat: "Avocat",
        Parti_Politique: "Parti Politique",
        Autre: "Autre",
      },
    },
    validations: {
      // eslint-disable-next-line
      email: "Email ${value} is invalid",
    },
    disable: "Disable",
    enable: "Enable",
    doAddSuccess: "User(s) successfully saved",
    doUpdateSuccess: "User successfully saved",
    status: {
      active: "Active",
      invited: "Invited",
      "empty-permissions": "Waiting for Permissions",
    },
    exporterFileName: "users_export",
    doDestroySuccess: "User successfully deleted",
    doDestroyAllSelectedSuccess: "User(s) successfully deleted",
    edit: {
      title: "Edit User",
    },
    new: {
      title: "New User(s)",
      titleModal: "New User",
      emailsHint:
        "Separate multiple email addresses using the comma character.",
    },
    view: {
      title: "View User",
      activity: "Activity",
    },
    importer: {
      title: "Import Users",
      fileName: "users_import_template",
      hint: "Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.",
    },
    errors: {
      userAlreadyExists: "User with this email already exists",
      userNotFound: "User not found",
      disablingHimself: `You can't disable yourself`,
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },
  glossaire: {
    name: "glossaire",
    label: "Glossaires",
    menu: "Glossaires",
    exporterFileName: "glossaire_export",
    list: {
      menu: "Glossaires",
      title: "Glossaires",
    },
    create: {
      success: "Glossaire successfully saved",
    },
    update: {
      success: "Glossaire successfully saved",
    },
    destroy: {
      success: "Glossaire successfully deleted",
    },
    destroyAll: {
      success: "Glossaire(s) successfully deleted",
    },
    edit: {
      title: "Edit Glossaire",
    },
    fields: {
      id: "Id",
      thematique: "Thematique",
      categorie: "Categorie",
      abreviation: "Abreviation",
      nom: "Nom",
      definition: "Definition",
      createdAt: "Created at",
      updatedAt: "Updated at",
      createdAtRange: "Created at",
    },
    enumerators: {},
    placeholders: {},
    hints: {},
    new: {
      title: "New Glossaire",
    },
    view: {
      title: "View Glossaire",
    },
    importer: {
      title: "Import Glossaires",
      fileName: "glossaire_import_template",
      hint: "Files/Images columns must be the URLs of the files separated by space.",
    },
  },

  categoryGlossaire: {
    name: "categoryGlossaire",
    label: "Category Glossaires",
    menu: "Category Glossaires",
    exporterFileName: "categoryGlossaire_export",
    list: {
      menu: "Category Glossaires",
      title: "Category Glossaires",
    },
    create: {
      success: "CategoryGlossaire successfully saved",
    },
    update: {
      success: "CategoryGlossaire successfully saved",
    },
    destroy: {
      success: "CategoryGlossaire successfully deleted",
    },
    destroyAll: {
      success: "CategoryGlossaire(s) successfully deleted",
    },
    edit: {
      title: "Edit CategoryGlossaire",
    },
    fields: {
      id: "Id",
      glossaire: "Glossaire",
      createdAt: "Created at",
      updatedAt: "Updated at",
      createdAtRange: "Created at",
    },
    enumerators: {},
    placeholders: {},
    hints: {},
    new: {
      title: "New CategoryGlossaire",
    },
    view: {
      title: "View CategoryGlossaire",
    },
    importer: {
      title: "Import CategoryGlossaires",
      fileName: "categoryGlossaire_import_template",
      hint: "Files/Images columns must be the URLs of the files separated by space.",
    },
  },

  plan: {
    menu: "Plans",
    title: "Plans",

    free: {
      label: "Free",
      price: "$0",
    },
    growth: {
      label: "Growth",
      price: "$10",
    },
    enterprise: {
      label: "Enterprise",
      price: "$50",
    },

    pricingPeriod: "/month",
    current: "Current Plan",
    subscribe: "Subscribe",
    manage: "Manage Subscription",
    cancelAtPeriodEnd: "This plan will be canceled at the end of the period.",
    somethingWrong:
      "There is something wrong with your subscription. Please go to manage subscription for more details.",
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: "Audit Logs",
    title: "Audit Logs",
    exporterFileName: "audit_log_export",
    entityNamesHint: "Separate multiple entities using the comma character.",
    fields: {
      id: "Id",
      timestampRange: "Period",
      entityName: "Entity",
      entityNames: "Entities",
      entityId: "Entity ID",
      action: "Action",
      values: "Values",
      timestamp: "Date",
      createdByEmail: "User Email",
    },
  },
  settings: {
    title: "Settings",
    menu: "Settings",
    save: {
      success:
        "Settings successfully saved. The page will reload in {0} seconds for changes to take effect.",
    },
    fields: {
      theme: "Theme",
      logos: "Logo",
      backgroundImages: "Background Image",
    },
    colors: {
      default: "Default",
      cyan: "Cyan",
      "geek-blue": "Geek Blue",
      gold: "Gold",
      lime: "Lime",
      magenta: "Magenta",
      orange: "Orange",
      "polar-green": "Polar Green",
      purple: "Purple",
      red: "Red",
      volcano: "Volcano",
      yellow: "Yellow",
    },
  },
  dashboard: {
    menu: "Dashboard",
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: "Day",
      red: "Red",
      green: "Green",
      yellow: "Yellow",
      grey: "Grey",
      blue: "Blue",
      orange: "Orange",
      months: {
        "1": "January",
        "2": "February",
        "3": "March",
        "4": "April",
        "5": "May",
        "6": "June",
        "7": "July",
        "8": "August",
        "9": "September",
        "10": "October",
        "11": "November",
        "12": "December",
      },
    },
  },
  errors: {
    backToHome: "Back to home",
    403: `Sorry, you don't have access to this page`,
    404: "Sorry, the page you visited does not exist",
    500: "Sorry, the server is reporting an error",
    429: "Too many requests. Please try again later.",
    forbidden: {
      message: "Forbidden",
    },
    validation: {
      message: "An error occurred",
    },
    defaultErrorMessage: "Ops, an error occurred",
  },

  preview: {
    error: "Sorry, this operation is not allowed in preview mode.",
  },

  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: "${path} is invalid",
      required: "${path} is required",
      oneOf: "${path} must be one of the following values: ${values}",
      notOneOf: "${path} must not be one of the following values: ${values}",
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length: "${path} must be exactly ${length} characters",
      min: "${path} must be at least ${min} characters",
      max: "${path} must be at most ${max} characters",
      matches: '${path} must match the following: "${regex}"',
      email: "${path} must be a valid email",
      url: "${path} must be a valid URL",
      trim: "${path} must be a trimmed string",
      lowercase: "${path} must be a lowercase string",
      uppercase: "${path} must be a upper case string",
      selected: "${path} must be selected",
    },
    number: {
      min: "${path} must be greater than or equal to ${min}",
      max: "${path} must be less than or equal to ${max}",
      lessThan: "${path} must be less than ${less}",
      moreThan: "${path} must be greater than ${more}",
      notEqual: "${path} must be not equal to ${notEqual}",
      positive: "${path} must be a positive number",
      negative: "${path} must be a negative number",
      integer: "${path} must be an integer",
    },
    date: {
      min: "${path} field must be later than ${min}",
      max: "${path} field must be at earlier than ${max}",
    },
    boolean: {},
    object: {
      noUnknown:
        "${path} field cannot have keys not specified in the object shape",
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} is required`
          : `${path} field must have at least ${min} items`,
      max: "${path} field must have less than or equal to ${max} items",
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: "Upload",
    image: "You must upload an image",
    size: "File is too big. Max allowed size is {0}",
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: "Line",
    status: "Status",
    pending: "Pending",
    imported: "Imported",
    error: "Error",
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      "Do not navigate away from this page or import will be stopped.",
    completed: {
      success: "Import completed. All rows were successfully imported.",
      someErrors:
        "Processing completed, but some rows were unable to be imported.",
      allErrors: "Import failed. There are no valid rows.",
    },
    form: {
      downloadTemplate: "Download the template",
      hint: "Click or drag the file to this area to continue",
    },
    list: {
      discardConfirm: "Are you sure? Non-imported data will be lost.",
    },
    errors: {
      invalidFileEmpty: "The file is empty",
      invalidFileExcel: "Only excel (.xlsx) files are allowed",
      invalidFileUpload:
        "Invalid file. Make sure you are using the last version of the template.",
      importHashRequired: "Import hash is required",
      importHashExistent: "Data has already been imported",
    },
  },
  table: {
    noData: "Aucune donnée",
    loading: "Chargement...",
    suivant: "Next",
    precedent: "previous",
  },
  autocomplete: {
    loading: "Loading...",
  },

  imagesViewer: {
    noImage: "No image",
  },
};

export default en;
