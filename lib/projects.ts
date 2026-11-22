export const projectFilters = [
  "All",
  "Analytics",
  "Data Engineering",
  "Applied AI",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];
export type ProjectCategory = Exclude<ProjectFilter, "All">;

export type ProjectVisual =
  | "focus"
  | "reconcile"
  | "battery"
  | "excel";

export type ProjectLink = {
  label: string;
  href: string;
  kind: "live" | "github" | "video";
};

export type Project = {
  slug: string;
  shortTitle: string;
  title: string;
  kicker: string;
  status: string;
  summary: string;
  categories: ProjectCategory[];
  tools: string[];
  visual: ProjectVisual;
  accent: "lime" | "blue" | "orange" | "violet" | "teal" | "rose";
  metrics: Array<{ value: string; label: string }>;
  problem: string;
  approach: string;
  built: string[];
  architecture: string[];
  decisions: Array<{ title: string; detail: string }>;
  result: string;
  next: string;
  links: ProjectLink[];
  embed?: {
    title: string;
    description: string;
    url: string;
  };
  video?: {
    src: string;
    poster: string;
    label: string;
    title: string;
    description: string;
  };
};

type ProjectTranslation = Pick<Project, "shortTitle" | "title" | "kicker" | "status" | "summary" | "metrics" | "problem" | "approach" | "built" | "architecture" | "decisions" | "result" | "next"> & {
  links?: Array<{ label: string }>;
  embed?: { title: string; description: string };
  video?: { label: string; title: string; description: string };
};

import type { Locale } from "@/lib/i18n";

export const projects: Project[] = [
  {
    slug: "focus-school-intelligence",
    shortTitle: "Focus",
    title: "From school incidents to timely intervention",
    kicker: "Flagship project · Product, analytics and AI",
    status: "Case study available",
    summary:
      "Focus helps school teams record incidents, spot patterns, manage follow-up and ask questions in Portuguese. It brings the web app, PostgreSQL data, dashboards, alerts and AI into one workflow.",
    categories: ["Analytics", "Data Engineering", "Applied AI"],
    tools: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "ECharts",
      "Gemini",
      "Groq",
      "Playwright",
    ],
    visual: "focus",
    accent: "lime",
    metrics: [
      { value: "4", label: "role-specific experiences" },
      { value: "2", label: "AI providers with fallback" },
      { value: "PDF + XLSX", label: "operational exports" },
      { value: "E2E", label: "configured browser tests" },
    ],
    problem:
      "A list of incidents is not enough for a school team. Staff need to record what happened, protect each school’s information, notice patterns, contact the right people and follow each case until it is resolved.",
    approach:
      "I designed Focus as a complete working tool rather than a standalone dashboard. Data entry, access rules, analysis, alerts, reports and the AI assistant all support the same day-to-day process.",
    built: [
      "School-aware access rules built with PostgreSQL Row Level Security.",
      "Master, administrator, professor, and read-only viewer workflows.",
      "Student, class, occurrence, feedback, alert, and academic-year management.",
      "Interactive charts that let users explore related patterns across the dashboard.",
      "Natural-language questions over school data with Gemini and Groq fallback.",
      "Excel/PDF exports, email notifications, imports, and mobile navigation.",
    ],
    architecture: [
      "Role-aware capture",
      "Next.js API layer",
      "Supabase + PostgreSQL RLS",
      "ECharts analytical views",
      "Gemini / Groq AI layer",
      "Alerts, reports, and follow-up",
    ],
    decisions: [
      {
        title: "Keep each school’s data separate",
        detail:
          "Row Level Security supports school-aware access in the standard data paths. I am keeping the public demo closed until the service-role routes complete an additional authorization review.",
      },
      {
        title: "Keep the assistant available",
        detail:
          "The assistant can use a second model provider when the primary provider is unavailable or reaches a usage limit.",
      },
      {
        title: "Connect insight to follow-up",
        detail:
          "Charts, alerts, status changes, feedback history and exports live in the same product so the team can act on what it finds.",
      },
    ],
    result:
      "Focus shows how I work across product design, data modeling, analysis and applied AI. It takes a real operational task from data entry through follow-up.",
    next:
      "My next step is to finish the security review, create a safe demo school with sample data and record a short walkthrough for recruiters.",
    links: [],
  },
  {
    slug: "catalog-reconciliation",
    shortTitle: "Catalog Reconciliation - ERP vs Online Store",
    title: "Finding SKU and price gaps between the ERP and the online stores",
    kicker: "Oracle NetSuite · Data quality",
    status: "Demo with sample data",
    summary:
      "A page inside the ERP that compares every product in the online stores with the ERP catalog. It finds SKU and price gaps, ranks them by urgency and says what to fix before the two systems are synced. In this example, the ERP is Oracle NetSuite and the online stores run on Wix.",
    categories: ["Analytics", "Data Engineering"],
    tools: [
      "Oracle NetSuite",
      "SuiteScript 2.1",
      "JavaScript",
      "HTML/CSS",
      "Wix",
      "CSV",
    ],
    visual: "reconcile",
    accent: "blue",
    metrics: [
      { value: "10", label: "SKU matching steps" },
      { value: "3", label: "severity levels" },
      { value: "USD · CAD · EUR", label: "prices compared per storefront" },
      { value: "Saved", label: "reviews with a reason" },
    ],
    problem:
      "The ERP and the online stores were not connected. New items were created in the ERP and then typed again by hand in each store, in several languages and currencies. Over time, SKUs and prices drifted apart, and the only check was a yearly manual comparison.",
    approach:
      "I built the check inside the ERP, where the item data already lives. The page reads the store exports, matches each store SKU with an ERP item using a fixed set of rules, compares the price in the right currency and sorts every finding by urgency. Each row says what is wrong and what to do.",
    built: [
      "A Suitelet page in SuiteScript 2.1 that reads ERP items, MPNs, alternate part numbers and Base Prices.",
      "Ten matching steps, from the exact SKU to language suffixes, MPNs, short forms and likely typos.",
      "Price comparison in each storefront's currency, including items sold in packs of 100.",
      "A coverage check that finds products missing in one of the four North America storefronts.",
      "Reviews saved in the ERP with a reason, valid only while the row stays the same.",
      "The latest store files kept in the ERP, so the page opens with the last results.",
      "CSV export of the filtered list for the people who update the stores.",
    ],
    architecture: [
      "Store product exports",
      "ERP items and prices",
      "SKU matching rules",
      "Price and coverage checks",
      "Severity and reviews",
      "Action list and export",
    ],
    decisions: [
      {
        title: "Explain every match",
        detail:
          "Some SKUs are written differently on purpose. The page shows why each row matched, so the team trusts the result and only acts on real problems.",
      },
      {
        title: "Rank by what needs action",
        detail:
          "Findings are grouped as Fix now, Review or OK. The team starts with wrong prices and SKUs, and expected differences can be marked as reviewed.",
      },
      {
        title: "Build where the data lives",
        detail:
          "Running inside the ERP means no extra server, no copy of the item data and the same permissions the team already has.",
      },
    ],
    result:
      "A yearly manual comparison becomes a check that runs in seconds and can be repeated whenever a store changes. The result is one shared list of what to fix before the systems are synced.",
    next:
      "Next, I would read the stores directly through the Wix API, with read-only access and the key stored in NetSuite API Secrets, so the check can run on a schedule without file uploads.",
    links: [],
    video: {
      src: "/catalog-reconciliation-demo.mp4",
      poster: "/catalog-reconciliation-poster.jpg",
      label: "Product demo",
      title: "See the check in action",
      description:
        "A 40-second demo: loading the store exports, reviewing the problems found and exporting the action list. The company, products and prices are fictional.",
    },
  },
  {
    slug: "battery-lifecycle-power-bi",
    shortTitle: "Battery Lifecycle",
    title: "Planning battery replacements with Power BI",
    kicker: "Power BI · Maintenance planning",
    status: "Live interactive report",
    summary:
      "An interactive Power BI report that helps operations teams review battery life, compare consumption with historical averages, inspect individual devices and plan maintenance by location.",
    categories: ["Analytics"],
    tools: ["Power BI", "DAX", "Data modeling", "Forecasting", "Geospatial analysis"],
    visual: "battery",
    accent: "orange",
    metrics: [
      { value: "Asset-level", label: "serial-number visibility" },
      { value: "Forecast", label: "remaining battery life" },
      { value: "History", label: "actual vs average use" },
      { value: "Map", label: "geographic distribution" },
    ],
    problem:
      "Battery replacement becomes reactive when battery life, consumption, device identity and location are reviewed separately. The team needs one place to find devices that may require attention and understand why.",
    approach:
      "I organized the report around the maintenance decision. Users can start with remaining life, compare recent consumption with the historical average, locate the device and then inspect its trend in more detail.",
    built: [
      "Remaining-lifetime and consumption indicators for monitored assets.",
      "Historical versus projected battery-performance views.",
      "Serial-number detail for tracing the dashboard back to an individual device.",
      "Geographic distribution for maintenance planning.",
      "Interactive filtering and hover detail for deeper investigation.",
    ],
    architecture: [
      "Device history",
      "Clean analytical model",
      "Lifecycle measures",
      "Forecast signals",
      "Interactive report",
      "Maintenance decision",
    ],
    decisions: [
      {
        title: "Start with the maintenance question",
        detail:
          "The report starts with remaining life and unusual consumption, then adds the trend and location context needed to plan the work.",
      },
      {
        title: "Keep every device traceable",
        detail:
          "Summary patterns stay connected to serial-number detail so a user can move from an overall signal to a specific monitor.",
      },
      {
        title: "Show history and projection clearly",
        detail:
          "Actual and projected performance are presented as distinct signals to avoid implying that estimates are observed facts.",
      },
    ],
    result:
      "The report gives the maintenance team a practical way to find low-life devices, understand consumption patterns and plan replacement before a failure.",
    next:
      "I would publish a simplified data model, selected DAX measures, forecast validation notes and a short walkthrough of one maintenance decision.",
    links: [
      {
        label: "Open full-screen report",
        href: "https://app.powerbi.com/view?r=eyJrIjoiM2M5ZmY5YTMtYTA5ZS00YTIzLWFkNzItMjQ3NGMwOWU4Yzc4IiwidCI6IjE2ZTk4MGQ1LWQyOTctNDVmZC1hOTc2LTUyMmM2ODU0NzkxZSJ9",
        kind: "live",
      },
    ],
    embed: {
      title: "Battery Consumption Forecast dashboard",
      description:
        "Use the report below to explore remaining lifetime, consumption versus average, battery level and the map. The report is published from Power BI and may take a few seconds to load.",
      url: "https://app.powerbi.com/view?r=eyJrIjoiM2M5ZmY5YTMtYTA5ZS00YTIzLWFkNzItMjQ3NGMwOWU4Yzc4IiwidCI6IjE2ZTk4MGQ1LWQyOTctNDVmZC1hOTc2LTUyMmM2ODU0NzkxZSJ9",
    },
  },
  {
    slug: "excel-automation-lab",
    shortTitle: "Excel Automation Lab",
    title: "Automating everyday Excel work with VBA",
    kicker: "Excel · Practical automation",
    status: "Two video demonstrations",
    summary:
      "Six practical Excel builds covering invoice creation, email preparation, filtering, fuel tracking, text extraction, reporting and an educational game.",
    categories: ["Analytics"],
    tools: ["Excel", "VBA", "Power Query", "Regex", "PDF", "Email automation"],
    visual: "excel",
    accent: "teal",
    metrics: [
      { value: "2", label: "video demonstrations" },
      { value: "VBA", label: "workflow automation" },
      { value: "Regex", label: "attribute extraction" },
      { value: "PDF + email", label: "invoice output" },
    ],
    problem:
      "Spreadsheet work can turn into a long sequence of filters, copied values, formatting, file creation and manual follow-up. Repeating those steps takes time and makes mistakes more likely.",
    approach:
      "For each project, I mapped the manual steps first and then used formulas, Power Query or VBA to turn them into a clear guided process inside Excel.",
    built: [
      "Invoice workflow that extracts records, formats PDFs, and prepares email delivery.",
      "Column-based filtering and extraction for retrieving product IDs.",
      "Fuel-entry and editing workflow paired with a management dashboard.",
      "Regex-powered function for extracting measurement units and product attributes.",
      "Revenue dashboard with salesperson and time-based performance views.",
      "Interactive French-verb battleship game built inside Excel.",
    ],
    architecture: [
      "Manual task",
      "Rules and inputs",
      "VBA workflow",
      "Validation",
      "Formatted output",
      "Operational handoff",
    ],
    decisions: [
      {
        title: "Keep the familiar interface",
        detail:
          "Users can stay in Excel while the automation handles the repetitive steps that are easiest to miss or repeat incorrectly.",
      },
      {
        title: "Make each step clear",
        detail:
          "Buttons, forms and clear outputs make the workflow understandable even when the VBA behind it is more complex.",
      },
      {
        title: "Show the workflow in action",
        detail:
          "The two video demonstrations show what the user does, what Excel automates and what the finished output looks like.",
      },
    ],
    result:
      "These projects show how I use Excel as both an analysis tool and a practical interface for repeatable operational work.",
    next:
      "I would package the strongest examples with safe sample files, a simple process comparison and a documented estimate of time saved.",
    links: [
      {
        label: "Watch email automation",
        href: "https://www.youtube.com/watch?v=2cHLNBWRQfg",
        kind: "video",
      },
      {
        label: "Watch fueling control",
        href: "https://www.youtube.com/watch?v=2Bg3I0QyR0s",
        kind: "video",
      },
    ],
  },
];

const projectTranslations: Partial<Record<Exclude<Locale, "en">, Record<string, ProjectTranslation>>> = {
  fr: {
    "focus-school-intelligence": {
      shortTitle: "Focus", title: "Des événements scolaires à une intervention au bon moment", kicker: "Produit phare · Produit, analytique et IA", status: "Étude de cas disponible",
      summary: "Focus aide les équipes scolaires à consigner les événements, repérer les tendances, gérer les suivis et poser des questions en portugais. L'application web, les données PostgreSQL, les tableaux de bord, les alertes et l'IA sont réunis dans un même flux de travail.",
      metrics: [{ value: "4", label: "expériences adaptées aux rôles" }, { value: "2", label: "fournisseurs d'IA avec solution de repli" }, { value: "PDF + XLSX", label: "exports opérationnels" }, { value: "E2E", label: "tests de navigation configurés" }],
      problem: "Une simple liste d'événements ne suffit pas à une équipe scolaire. Le personnel doit consigner ce qui s'est passé, protéger les données de chaque école, repérer les tendances, joindre les bonnes personnes et suivre chaque dossier jusqu'à sa résolution.",
      approach: "J'ai conçu Focus comme un véritable outil de travail plutôt que comme un tableau de bord isolé. La saisie, les règles d'accès, l'analyse, les alertes, les rapports et l'assistant IA soutiennent tous le même processus quotidien.",
      built: ["Règles d'accès par école avec Row Level Security de PostgreSQL.", "Parcours pour les profils maître, administrateur, enseignant et lecteur.", "Gestion des élèves, classes, événements, commentaires, alertes et années scolaires.", "Graphiques interactifs pour explorer les tendances liées dans le tableau de bord.", "Questions en langage naturel sur les données scolaires avec repli de Gemini vers Groq.", "Exports Excel/PDF, avis par courriel, importations et navigation mobile."],
      architecture: ["Saisie selon le rôle", "Couche API Next.js", "Supabase + PostgreSQL RLS", "Vues analytiques ECharts", "Couche IA Gemini / Groq", "Alertes, rapports et suivis"],
      decisions: [{ title: "Séparer les données de chaque école", detail: "La Row Level Security limite les parcours standards aux données de l'école concernée. La démonstration publique restera fermée jusqu'à la fin d'une vérification supplémentaire des routes qui utilisent le rôle de service." }, { title: "Maintenir l'assistant disponible", detail: "L'assistant peut passer à un second fournisseur lorsque le premier est indisponible ou atteint sa limite d'utilisation." }, { title: "Relier l'analyse au suivi", detail: "Les graphiques, alertes, changements d'état, historiques et exports restent dans le même produit afin que l'équipe puisse agir sur ses constats." }],
      result: "Focus montre ma façon de travailler à la croisée du design produit, de la modélisation des données, de l'analyse et de l'IA appliquée. Il accompagne une tâche réelle de la saisie jusqu'au suivi.",
      next: "La prochaine étape consiste à terminer la vérification de sécurité, créer une école de démonstration avec des données fictives et enregistrer une courte présentation pour les recruteurs."
    },
    "catalog-reconciliation": {
      shortTitle: "Rapprochement du catalogue - ERP et boutique en ligne",
      title: "Repérer les écarts de SKU et de prix entre l'ERP et les boutiques en ligne",
      kicker: "Oracle NetSuite · Qualité des données",
      status: "Démonstration avec données fictives",
      summary: "Une page dans l'ERP qui compare chaque produit des boutiques en ligne avec le catalogue de l'ERP. Elle repère les écarts de SKU et de prix, les classe par urgence et indique quoi corriger avant de synchroniser les deux systèmes. Dans cet exemple, l'ERP est Oracle NetSuite et les boutiques en ligne utilisent Wix.",
      metrics: [{"value": "10", "label": "étapes de correspondance des SKU"}, {"value": "3", "label": "niveaux de gravité"}, {"value": "USD · CAD · EUR", "label": "prix comparés par vitrine"}, {"value": "Enregistrées", "label": "révisions avec motif"}],
      problem: "L'ERP et les boutiques en ligne n'étaient pas reliés. Les nouveaux articles étaient créés dans l'ERP, puis saisis de nouveau à la main dans chaque boutique, en plusieurs langues et devises. Avec le temps, les SKU et les prix se sont mis à diverger, et la seule vérification était une comparaison manuelle annuelle.",
      approach: "J'ai construit la vérification dans l'ERP, là où se trouvent déjà les données des articles. La page lit les exports des boutiques, associe chaque SKU à un article de l'ERP selon des règles fixes, compare le prix dans la bonne devise et classe chaque constat par urgence. Chaque ligne indique le problème et l'action à prendre.",
      built: ["Une page Suitelet en SuiteScript 2.1 qui lit les articles, MPN, numéros de pièce alternatifs et prix de base de l'ERP.", "Dix étapes de correspondance, du SKU exact aux suffixes de langue, MPN, formes courtes et fautes de frappe probables.", "Comparaison des prix dans la devise de chaque vitrine, y compris les articles vendus par paquets de 100.", "Une vérification de couverture qui repère les produits absents de l'une des quatre vitrines d'Amérique du Nord.", "Révisions enregistrées dans l'ERP avec un motif, valides tant que la ligne ne change pas.", "Les derniers fichiers des boutiques conservés dans l'ERP, pour que la page s'ouvre avec les derniers résultats.", "Export CSV de la liste filtrée pour les personnes qui mettent à jour les boutiques."],
      architecture: ["Exports des boutiques", "Articles et prix de l'ERP", "Règles de correspondance des SKU", "Contrôles de prix et de couverture", "Gravité et révisions", "Liste d'actions et export"],
      decisions: [{"title": "Expliquer chaque correspondance", "detail": "Certains SKU sont écrits différemment exprès. La page montre pourquoi chaque ligne correspond, afin que l'équipe fasse confiance au résultat et n'agisse que sur les vrais problèmes."}, {"title": "Classer selon l'action requise", "detail": "Les constats sont regroupés en À corriger, À revoir ou OK. L'équipe commence par les prix et SKU erronés, et les écarts prévus peuvent être marqués comme révisés."}, {"title": "Construire là où sont les données", "detail": "Fonctionner dans l'ERP évite un serveur de plus et une copie des données, et conserve les permissions que l'équipe a déjà."}],
      result: "Une comparaison manuelle annuelle devient une vérification qui prend quelques secondes et peut être refaite dès qu'une boutique change. Le résultat est une seule liste partagée de ce qu'il faut corriger avant de synchroniser les systèmes.",
      next: "La prochaine étape serait de lire les boutiques directement avec l'API de Wix, en lecture seule et avec la clé conservée dans les API Secrets de NetSuite, pour lancer la vérification selon un horaire sans téléverser de fichiers.",
      video: {"label": "Démonstration du produit", "title": "Voir la vérification en action", "description": "Une démonstration de 40 secondes : chargement des exports des boutiques, examen des problèmes trouvés et export de la liste d'actions. L'entreprise, les produits et les prix sont fictifs."}
    },
    "battery-lifecycle-power-bi": {
      shortTitle: "Cycle de vie des batteries", title: "Planifier le remplacement des batteries avec Power BI", kicker: "Power BI · Planification de la maintenance", status: "Rapport interactif",
      summary: "Un rapport Power BI interactif qui aide les équipes d'exploitation à évaluer la durée de vie des batteries, comparer la consommation aux moyennes historiques, examiner les appareils et planifier la maintenance par emplacement.",
      metrics: [{ value: "Par actif", label: "visibilité par numéro de série" }, { value: "Prévision", label: "durée de vie restante" }, { value: "Historique", label: "consommation réelle et moyenne" }, { value: "Carte", label: "répartition géographique" }],
      problem: "Le remplacement devient réactif lorsque la durée de vie, la consommation, l'identité et l'emplacement sont examinés séparément. L'équipe a besoin d'un seul endroit pour repérer les appareils à surveiller et comprendre pourquoi.",
      approach: "J'ai organisé le rapport autour de la décision de maintenance. L'utilisateur commence par la durée restante, compare la consommation récente à la moyenne historique, localise l'appareil puis examine sa tendance en détail.",
      built: ["Indicateurs de durée restante et de consommation des actifs.", "Vues historiques et projetées de la performance des batteries.", "Détail par numéro de série pour retracer chaque appareil.", "Répartition géographique pour planifier la maintenance.", "Filtres interactifs et détails au survol."],
      architecture: ["Historique des appareils", "Modèle analytique propre", "Mesures du cycle de vie", "Signaux prévisionnels", "Rapport interactif", "Décision de maintenance"],
      decisions: [{ title: "Commencer par la décision de maintenance", detail: "Le rapport commence par la durée restante et la consommation inhabituelle, puis ajoute la tendance et l'emplacement nécessaires à la planification." }, { title: "Garder chaque appareil traçable", detail: "Les tendances globales restent liées au numéro de série afin de passer d'un signal général à un appareil précis." }, { title: "Distinguer historique et projection", detail: "Les observations et les prévisions sont présentées comme des signaux distincts pour ne pas confondre estimations et faits." }],
      result: "Le rapport permet à l'équipe de repérer les appareils en fin de vie, comprendre leur consommation et planifier un remplacement avant la panne.",
      next: "Je publierais un modèle simplifié, quelques mesures DAX, des notes de validation et une courte présentation d'une décision de maintenance.", links: [{ label: "Ouvrir le rapport en plein écran" }], embed: { title: "Tableau de bord de prévision des batteries", description: "Utilisez le rapport pour explorer la durée restante, la consommation, le niveau de batterie et la carte. Le rapport Power BI peut prendre quelques secondes à charger." }
    },
    "excel-automation-lab": {
      shortTitle: "Laboratoire d'automatisation Excel", title: "Automatiser le travail quotidien dans Excel avec VBA", kicker: "Excel · Automatisation pratique", status: "Deux démonstrations vidéo",
      summary: "Des projets Excel pratiques couvrant la création de factures, la préparation de courriels, les filtres, le suivi du carburant, l'extraction de texte, les rapports et un jeu éducatif.",
      metrics: [{ value: "2", label: "démonstrations vidéo" }, { value: "VBA", label: "automatisation des flux" }, { value: "Regex", label: "extraction d'attributs" }, { value: "PDF + courriel", label: "production des factures" }],
      problem: "Le travail dans un classeur peut devenir une longue suite de filtres, copies, mises en forme, créations de fichiers et suivis manuels. La répétition prend du temps et augmente les risques d'erreur.",
      approach: "Pour chaque projet, j'ai d'abord cartographié les étapes manuelles, puis utilisé des formules, Power Query ou VBA pour les transformer en un processus guidé dans Excel.",
      built: ["Flux de facturation qui extrait les données, crée les PDF et prépare l'envoi par courriel.", "Filtrage et extraction par colonne pour retrouver les identifiants de produits.", "Saisie et modification du carburant avec tableau de bord de gestion.", "Fonction Regex pour extraire les unités et attributs de produits.", "Tableau de bord des revenus par vendeur et période.", "Jeu de bataille navale interactif pour apprendre les verbes français dans Excel."],
      architecture: ["Tâche manuelle", "Règles et entrées", "Flux VBA", "Validation", "Résultat formaté", "Remise opérationnelle"],
      decisions: [{ title: "Conserver l'interface familière", detail: "L'utilisateur reste dans Excel tandis que l'automatisation gère les étapes répétitives les plus faciles à manquer." }, { title: "Clarifier chaque étape", detail: "Les boutons, formulaires et résultats rendent le flux compréhensible même lorsque le code VBA est plus complexe." }, { title: "Montrer le flux en action", detail: "Les deux vidéos montrent les actions de l'utilisateur, les étapes automatisées et le résultat final." }],
      result: "Ces projets montrent comment j'utilise Excel comme outil d'analyse et comme interface pratique pour des opérations répétables.",
      next: "Je regrouperais les meilleurs exemples avec des fichiers fictifs sécuritaires, une comparaison du processus et une estimation documentée du temps économisé.", links: [{ label: "Voir l'automatisation des courriels" }, { label: "Voir le suivi du carburant" }]
    }
  },
  es: {
    "focus-school-intelligence": {
      shortTitle: "Focus", title: "De las incidencias escolares a una intervención oportuna", kicker: "Producto principal · Producto, analítica e IA", status: "Caso de estudio disponible",
      summary: "Focus ayuda a los equipos escolares a registrar incidencias, detectar patrones, gestionar seguimientos y hacer preguntas en portugués. La aplicación web, los datos PostgreSQL, los paneles, las alertas y la IA forman un único flujo de trabajo.",
      metrics: [{ value: "4", label: "experiencias específicas por perfil" }, { value: "2", label: "proveedores de IA con alternativa" }, { value: "PDF + XLSX", label: "exportaciones operativas" }, { value: "E2E", label: "pruebas de navegador configuradas" }],
      problem: "Una lista de incidencias no es suficiente para un equipo escolar. El personal necesita registrar lo ocurrido, proteger la información de cada escuela, detectar patrones, contactar a las personas adecuadas y seguir cada caso hasta resolverlo.",
      approach: "Diseñé Focus como una herramienta de trabajo completa y no como un panel aislado. El registro, las reglas de acceso, el análisis, las alertas, los informes y el asistente de IA apoyan el mismo proceso diario.",
      built: ["Reglas de acceso por escuela con Row Level Security de PostgreSQL.", "Flujos para perfiles master, administrador, profesor y lector.", "Gestión de alumnos, clases, incidencias, comentarios, alertas y años escolares.", "Gráficos interactivos para explorar patrones relacionados.", "Preguntas en lenguaje natural sobre datos escolares con alternativa entre Gemini y Groq.", "Exportaciones Excel/PDF, avisos por correo, importaciones y navegación móvil."],
      architecture: ["Registro según el perfil", "Capa API de Next.js", "Supabase + PostgreSQL RLS", "Vistas analíticas ECharts", "Capa de IA Gemini / Groq", "Alertas, informes y seguimiento"],
      decisions: [{ title: "Separar los datos de cada escuela", detail: "Row Level Security limita los flujos estándar a los datos de la escuela correspondiente. La demo pública seguirá cerrada hasta completar una revisión adicional de las rutas con service role." }, { title: "Mantener disponible el asistente", detail: "El asistente puede usar un segundo proveedor cuando el principal no está disponible o alcanza su límite." }, { title: "Conectar el análisis con el seguimiento", detail: "Gráficos, alertas, cambios de estado, historial y exportaciones están en el mismo producto para que el equipo pueda actuar." }],
      result: "Focus muestra cómo trabajo con diseño de producto, modelado de datos, análisis e IA aplicada. La solución acompaña una tarea real desde el registro hasta el seguimiento.",
      next: "El siguiente paso es terminar la revisión de seguridad, crear una escuela de demostración con datos ficticios y grabar una presentación breve para reclutadores."
    },
    "catalog-reconciliation": {
      shortTitle: "Conciliación del catálogo - ERP frente a tienda en línea",
      title: "Encontrar diferencias de SKU y precio entre el ERP y las tiendas en línea",
      kicker: "Oracle NetSuite · Calidad de datos",
      status: "Demo con datos de ejemplo",
      summary: "Una página dentro del ERP que compara cada producto de las tiendas en línea con el catálogo del ERP. Detecta diferencias de SKU y de precio, las ordena por urgencia e indica qué corregir antes de sincronizar los dos sistemas. En este ejemplo, el ERP es Oracle NetSuite y las tiendas en línea funcionan con Wix.",
      metrics: [{"value": "10", "label": "pasos para cruzar SKU"}, {"value": "3", "label": "niveles de gravedad"}, {"value": "USD · CAD · EUR", "label": "precios comparados por tienda"}, {"value": "Guardadas", "label": "revisiones con motivo"}],
      problem: "El ERP y las tiendas en línea no estaban conectados. Los artículos nuevos se creaban en el ERP y luego se volvían a escribir a mano en cada tienda, en varios idiomas y monedas. Con el tiempo, los SKU y los precios dejaron de coincidir, y la única revisión era una comparación manual anual.",
      approach: "Construí la revisión dentro del ERP, donde ya están los datos de los artículos. La página lee las exportaciones de las tiendas, cruza cada SKU con un artículo del ERP mediante reglas fijas, compara el precio en la moneda correcta y ordena cada hallazgo por urgencia. Cada fila indica el problema y qué hacer.",
      built: ["Una página Suitelet en SuiteScript 2.1 que lee artículos, MPN, números de parte alternativos y precios base del ERP.", "Diez pasos de cruce, desde el SKU exacto hasta sufijos de idioma, MPN, formas cortas y posibles errores de escritura.", "Comparación de precios en la moneda de cada tienda, incluidos los artículos que se venden en paquetes de 100.", "Una revisión de cobertura que detecta productos que faltan en alguna de las cuatro tiendas de América del Norte.", "Revisiones guardadas en el ERP con un motivo, válidas solo mientras la fila no cambie.", "Los últimos archivos de las tiendas guardados en el ERP, para que la página abra con los últimos resultados.", "Exportación CSV de la lista filtrada para quienes actualizan las tiendas."],
      architecture: ["Exportaciones de las tiendas", "Artículos y precios del ERP", "Reglas de cruce de SKU", "Revisión de precios y cobertura", "Gravedad y revisiones", "Lista de acciones y exportación"],
      decisions: [{"title": "Explicar cada cruce", "detail": "Algunos SKU se escriben distinto a propósito. La página muestra por qué coincide cada fila, para que el equipo confíe en el resultado y actúe solo sobre problemas reales."}, {"title": "Ordenar por lo que requiere acción", "detail": "Los hallazgos se agrupan en Corregir, Revisar u OK. El equipo empieza por precios y SKU incorrectos, y las diferencias esperadas se pueden marcar como revisadas."}, {"title": "Construir donde están los datos", "detail": "Funcionar dentro del ERP evita otro servidor y otra copia de los datos, y mantiene los permisos que el equipo ya tiene."}],
      result: "Una comparación manual anual se convierte en una revisión que tarda segundos y se puede repetir cada vez que cambia una tienda. El resultado es una sola lista compartida de lo que hay que corregir antes de sincronizar los sistemas.",
      next: "El siguiente paso sería leer las tiendas directamente con la API de Wix, con acceso de solo lectura y la clave guardada en NetSuite API Secrets, para que la revisión se ejecute de forma programada sin subir archivos.",
      video: {"label": "Demo del producto", "title": "Mira la revisión en acción", "description": "Una demo de 40 segundos: carga de las exportaciones de las tiendas, revisión de los problemas encontrados y exportación de la lista de acciones. La empresa, los productos y los precios son ficticios."}
    },
    "battery-lifecycle-power-bi": {
      shortTitle: "Ciclo de vida de baterías", title: "Planificación del reemplazo de baterías con Power BI", kicker: "Power BI · Planificación de mantenimiento", status: "Informe interactivo",
      summary: "Un informe interactivo en Power BI que ayuda a los equipos de operaciones a revisar la vida útil, comparar el consumo con promedios históricos, analizar dispositivos y planificar el mantenimiento por ubicación.",
      metrics: [{ value: "Por activo", label: "visibilidad por número de serie" }, { value: "Pronóstico", label: "vida útil restante" }, { value: "Historial", label: "consumo real frente al promedio" }, { value: "Mapa", label: "distribución geográfica" }],
      problem: "El reemplazo se vuelve reactivo cuando la vida útil, el consumo, la identidad y la ubicación se revisan por separado. El equipo necesita un solo lugar para encontrar dispositivos que requieren atención y entender por qué.",
      approach: "Organicé el informe alrededor de la decisión de mantenimiento. El usuario comienza con la vida restante, compara el consumo reciente con el promedio, localiza el dispositivo y luego analiza su tendencia.",
      built: ["Indicadores de vida restante y consumo de los activos.", "Vistas históricas y proyectadas del rendimiento de las baterías.", "Detalle por número de serie para rastrear cada dispositivo.", "Distribución geográfica para planificar el mantenimiento.", "Filtros interactivos y detalles al pasar el cursor."],
      architecture: ["Historial de dispositivos", "Modelo analítico limpio", "Métricas del ciclo de vida", "Señales de pronóstico", "Informe interactivo", "Decisión de mantenimiento"],
      decisions: [{ title: "Comenzar por la decisión de mantenimiento", detail: "El informe comienza con la vida restante y el consumo inusual, y luego añade la tendencia y la ubicación necesarias para planificar." }, { title: "Mantener cada dispositivo rastreable", detail: "Los patrones generales permanecen conectados al número de serie para pasar de una señal global a un dispositivo concreto." }, { title: "Separar historial y proyección", detail: "El rendimiento observado y el proyectado se muestran como señales distintas para no presentar estimaciones como hechos." }],
      result: "El informe ayuda al equipo a encontrar dispositivos con poca vida útil, entender su consumo y planificar el reemplazo antes de una falla.",
      next: "Publicaría un modelo simplificado, algunas medidas DAX, notas de validación y una breve presentación de una decisión de mantenimiento.", links: [{ label: "Abrir informe en pantalla completa" }], embed: { title: "Panel de pronóstico de baterías", description: "Usa el informe para explorar la vida restante, el consumo, el nivel de batería y el mapa. El informe de Power BI puede tardar unos segundos en cargar." }
    },
    "excel-automation-lab": {
      shortTitle: "Laboratorio de automatización en Excel", title: "Automatización del trabajo diario en Excel con VBA", kicker: "Excel · Automatización práctica", status: "Dos demostraciones en video",
      summary: "Proyectos prácticos en Excel que incluyen creación de facturas, preparación de correos, filtros, control de combustible, extracción de texto, informes y un juego educativo.",
      metrics: [{ value: "2", label: "demostraciones en video" }, { value: "VBA", label: "automatización de flujos" }, { value: "Regex", label: "extracción de atributos" }, { value: "PDF + correo", label: "salida de facturas" }],
      problem: "El trabajo con hojas de cálculo puede convertirse en una larga secuencia de filtros, copias, formato, creación de archivos y seguimiento manual. Repetir esas tareas consume tiempo y aumenta los errores.",
      approach: "Para cada proyecto, primero documenté los pasos manuales y luego usé fórmulas, Power Query o VBA para convertirlos en un proceso guiado dentro de Excel.",
      built: ["Flujo de facturas que extrae registros, crea PDF y prepara el envío por correo.", "Filtrado y extracción por columnas para recuperar IDs de productos.", "Ingreso y edición de combustible con panel de gestión.", "Función con Regex para extraer unidades y atributos de productos.", "Panel de ingresos por vendedor y periodo.", "Juego interactivo de batalla naval con verbos en francés dentro de Excel."],
      architecture: ["Tarea manual", "Reglas y entradas", "Flujo VBA", "Validación", "Resultado formateado", "Entrega operativa"],
      decisions: [{ title: "Mantener la interfaz conocida", detail: "El usuario permanece en Excel mientras la automatización se ocupa de los pasos repetitivos más propensos a errores." }, { title: "Hacer claro cada paso", detail: "Botones, formularios y resultados claros permiten entender el flujo aunque el VBA sea más complejo." }, { title: "Mostrar el flujo en acción", detail: "Los dos videos muestran qué hace el usuario, qué automatiza Excel y cómo queda el resultado final." }],
      result: "Estos proyectos muestran cómo uso Excel como herramienta de análisis y como interfaz práctica para operaciones repetibles.",
      next: "Organizaría los mejores ejemplos con archivos ficticios seguros, una comparación del proceso y una estimación documentada del tiempo ahorrado.", links: [{ label: "Ver automatización de correos" }, { label: "Ver control de combustible" }]
    }
  },
  pt: {
    "focus-school-intelligence": {
      shortTitle: "Focus", title: "De ocorrências escolares a intervenções precisas", kicker: "Produto principal · Produto, análise e IA", status: "Estudo de caso disponível",
      summary: "O Focus ajuda equipes escolares a registrar ocorrências, identificar padrões, gerenciar acompanhamentos e fazer perguntas em português. A aplicação web, os dados PostgreSQL, os dashboards, os alertas e a IA trabalham em um único fluxo.",
      metrics: [{ value: "4", label: "experiências específicas por perfil" }, { value: "2", label: "provedores de IA com alternativa" }, { value: "PDF + XLSX", label: "exportações operacionais" }, { value: "E2E", label: "testes de navegador configurados" }],
      problem: "Uma lista de ocorrências não é suficiente para uma equipe escolar. Os profissionais precisam registrar o que aconteceu, proteger as informações de cada escola, identificar padrões, contatar as pessoas certas e acompanhar cada caso até a resolução.",
      approach: "Desenvolvi o Focus como uma ferramenta de trabalho completa, e não apenas como um dashboard. Registro, regras de acesso, análises, alertas, relatórios e o assistente de IA apoiam o mesmo processo diário.",
      built: ["Regras de acesso por escola com Row Level Security do PostgreSQL.", "Fluxos para perfil master, administrador, professor e visualizador somente leitura.", "Gestão de alunos, turmas, ocorrências, feedbacks, alertas e anos letivos.", "Gráficos interativos para explorar padrões relacionados no dashboard.", "Perguntas em linguagem natural sobre os dados escolares com alternativa entre Gemini e Groq.", "Exportações Excel/PDF, notificações por e-mail, importações e navegação mobile."],
      architecture: ["Registro conforme o perfil", "Camada de API Next.js", "Supabase + PostgreSQL RLS", "Análises com ECharts", "Camada de IA Gemini / Groq", "Alertas, relatórios e acompanhamento"],
      decisions: [{ title: "Manter os dados de cada escola separados", detail: "A Row Level Security oferece acesso por escola nos fluxos padrão. A demonstração pública continuará fechada até que as rotas com service role passem por uma revisão adicional de autorização." }, { title: "Manter o assistente disponível", detail: "O assistente pode usar um segundo provedor quando o principal está indisponível ou atinge o limite de uso." }, { title: "Conectar análise e acompanhamento", detail: "Gráficos, alertas, alterações de status, histórico de feedback e exportações ficam no mesmo produto para que a equipe possa agir sobre o que encontra." }],
      result: "O Focus mostra como trabalho com design de produto, modelagem de dados, análise e IA aplicada. A solução acompanha uma tarefa operacional real desde o registro até o encerramento.",
      next: "O próximo passo é concluir a revisão de segurança, criar uma escola de demonstração com dados fictícios e gravar uma apresentação curta para recrutadores."
    },
    "catalog-reconciliation": {
      shortTitle: "Conciliação de catálogo - ERP vs loja online",
      title: "Encontrando diferenças de SKU e preço entre o ERP e as lojas online",
      kicker: "Oracle NetSuite · Qualidade de dados",
      status: "Demonstração com dados fictícios",
      summary: "Uma página dentro do ERP que compara cada produto das lojas online com o catálogo do ERP. Ela encontra diferenças de SKU e de preço, organiza por urgência e mostra o que corrigir antes de sincronizar os dois sistemas. Neste exemplo, o ERP é o Oracle NetSuite e as lojas online usam Wix.",
      metrics: [{"value": "10", "label": "etapas de correspondência de SKU"}, {"value": "3", "label": "níveis de severidade"}, {"value": "USD · CAD · EUR", "label": "preços comparados por vitrine"}, {"value": "Salvas", "label": "revisões com motivo"}],
      problem: "O ERP e as lojas online não eram conectados. Os itens novos eram criados no ERP e depois digitados de novo, à mão, em cada loja, em vários idiomas e moedas. Com o tempo, SKUs e preços ficaram diferentes, e a única verificação era uma comparação manual feita uma vez por ano.",
      approach: "Construí a verificação dentro do ERP, onde os dados dos itens já estão. A página lê as exportações das lojas, liga cada SKU a um item do ERP com um conjunto fixo de regras, compara o preço na moeda certa e organiza cada resultado por urgência. Cada linha diz o que está errado e o que fazer.",
      built: ["Uma página Suitelet em SuiteScript 2.1 que lê itens, MPNs, part numbers alternativos e preços base do ERP.", "Dez etapas de correspondência, do SKU exato a sufixos de idioma, MPNs, formas curtas e prováveis erros de digitação.", "Comparação de preços na moeda de cada vitrine, incluindo itens vendidos em pacotes de 100.", "Uma verificação de cobertura que encontra produtos faltando em uma das quatro vitrines da América do Norte.", "Revisões salvas no ERP com um motivo, válidas só enquanto a linha não mudar.", "Os últimos arquivos das lojas guardados no ERP, para a página abrir com os últimos resultados.", "Exportação em CSV da lista filtrada para quem atualiza as lojas."],
      architecture: ["Exportações das lojas", "Itens e preços do ERP", "Regras de correspondência de SKU", "Verificação de preço e cobertura", "Severidade e revisões", "Lista de ações e exportação"],
      decisions: [{"title": "Explicar cada correspondência", "detail": "Alguns SKUs são escritos de outro jeito de propósito. A página mostra por que cada linha foi ligada a um item, para a equipe confiar no resultado e agir só nos problemas reais."}, {"title": "Organizar pelo que precisa de ação", "detail": "Os resultados ficam em Corrigir, Revisar ou OK. A equipe começa pelos preços e SKUs errados, e as diferenças esperadas podem ser marcadas como revisadas."}, {"title": "Construir onde os dados estão", "detail": "Rodar dentro do ERP evita outro servidor e outra cópia dos dados, e mantém as permissões que a equipe já tem."}],
      result: "Uma comparação manual anual vira uma verificação que leva segundos e pode ser repetida sempre que uma loja muda. O resultado é uma única lista compartilhada do que corrigir antes de sincronizar os sistemas.",
      next: "O próximo passo seria ler as lojas direto pela API do Wix, com acesso somente leitura e a chave guardada no NetSuite API Secrets, para a verificação rodar de forma agendada, sem upload de arquivos.",
      video: {"label": "Demonstração do produto", "title": "Veja a verificação funcionando", "description": "Uma demonstração de 40 segundos: carregar as exportações das lojas, revisar os problemas encontrados e exportar a lista de ações. A empresa, os produtos e os preços são fictícios."}
    },
    "battery-lifecycle-power-bi": {
      shortTitle: "Ciclo de Vida das Baterias", title: "Planejamento da substituição de baterias com Power BI", kicker: "Power BI · Planejamento de manutenção", status: "Relatório interativo",
      summary: "Um relatório interativo no Power BI que ajuda equipes de operações a avaliar a vida útil das baterias, comparar o consumo com médias históricas, analisar dispositivos e planejar a manutenção por localização.",
      metrics: [{ value: "Por ativo", label: "visibilidade por número de série" }, { value: "Previsão", label: "vida útil restante" }, { value: "Histórico", label: "consumo real comparado à média" }, { value: "Mapa", label: "distribuição geográfica" }],
      problem: "A substituição de baterias se torna reativa quando vida útil, consumo, identidade e localização são analisados separadamente. A equipe precisa de um único lugar para encontrar dispositivos que exigem atenção e entender o motivo.",
      approach: "Organizei o relatório em torno da decisão de manutenção. O usuário começa pela vida útil restante, compara o consumo recente com a média histórica, localiza o dispositivo e então analisa sua tendência em detalhes.",
      built: ["Indicadores de vida útil restante e consumo dos ativos monitorados.", "Visões históricas e projetadas do desempenho das baterias.", "Detalhamento por número de série para rastrear cada dispositivo.", "Distribuição geográfica para o planejamento da manutenção.", "Filtros interativos e detalhes ao passar o cursor."],
      architecture: ["Histórico dos dispositivos", "Modelo analítico organizado", "Métricas de ciclo de vida", "Sinais de previsão", "Relatório interativo", "Decisão de manutenção"],
      decisions: [{ title: "Começar pela decisão de manutenção", detail: "O relatório começa com vida útil restante e consumo incomum, depois apresenta a tendência e a localização necessárias para planejar o trabalho." }, { title: "Manter cada dispositivo rastreável", detail: "Os padrões resumidos permanecem conectados ao número de série para levar o usuário do sinal geral ao equipamento específico." }, { title: "Separar histórico e projeção", detail: "Desempenho real e projetado aparecem como sinais distintos para não apresentar estimativas como fatos observados." }],
      result: "O relatório oferece à equipe de manutenção uma forma prática de encontrar dispositivos com pouca vida útil, entender padrões de consumo e planejar substituições antes de falhas.",
      next: "Eu publicaria uma versão simplificada do modelo de dados, algumas medidas DAX, notas de validação da previsão e uma apresentação curta de uma decisão de manutenção.",
      links: [{ label: "Abrir relatório em tela cheia" }], embed: { title: "Dashboard de previsão do consumo de baterias", description: "Use o relatório abaixo para explorar vida útil restante, consumo comparado à média, nível da bateria e localização. O relatório vem do Power BI e pode levar alguns segundos para carregar." }
    },
    "excel-automation-lab": {
      shortTitle: "Laboratório de Automação em Excel", title: "Automatizando tarefas diárias do Excel com VBA", kicker: "Excel · Automação prática", status: "Duas demonstrações em vídeo",
      summary: "Projetos práticos em Excel que incluem criação de faturas, preparação de e-mails, filtros, controle de abastecimento, extração de texto, relatórios e um jogo educativo.",
      metrics: [{ value: "2", label: "demonstrações em vídeo" }, { value: "VBA", label: "automação de fluxos" }, { value: "Regex", label: "extração de atributos" }, { value: "PDF + e-mail", label: "saída de faturas" }],
      problem: "O trabalho em planilhas pode se transformar em uma longa sequência de filtros, valores copiados, formatação, criação de arquivos e acompanhamentos manuais. Repetir essas etapas consome tempo e aumenta a possibilidade de erros.",
      approach: "Em cada projeto, primeiro mapeei as etapas manuais e depois usei fórmulas, Power Query ou VBA para transformá-las em um processo guiado dentro do Excel.",
      built: ["Fluxo de faturas que extrai registros, formata PDFs e prepara o envio por e-mail.", "Filtro e extração por colunas para localizar IDs de produtos.", "Cadastro e edição de abastecimentos com dashboard de gestão.", "Função com Regex para extrair unidades de medida e atributos de produtos.", "Dashboard de receita por vendedor e período.", "Jogo interativo de batalha naval com verbos em francês dentro do Excel."],
      architecture: ["Tarefa manual", "Regras e entradas", "Fluxo VBA", "Validação", "Resultado formatado", "Entrega operacional"],
      decisions: [{ title: "Manter a interface conhecida", detail: "O usuário permanece no Excel enquanto a automação cuida das etapas repetitivas mais propensas a erros." }, { title: "Deixar cada etapa clara", detail: "Botões, formulários e resultados claros tornam o fluxo compreensível mesmo quando o VBA é mais complexo." }, { title: "Mostrar o fluxo funcionando", detail: "As duas demonstrações em vídeo mostram o que o usuário faz, o que o Excel automatiza e como fica o resultado final." }],
      result: "Esses projetos mostram como uso o Excel como ferramenta de análise e também como interface prática para operações repetitivas.",
      next: "Eu organizaria os exemplos mais fortes com arquivos de amostra seguros, uma comparação simples do processo e uma estimativa documentada do tempo economizado.",
      links: [{ label: "Assistir à automação de e-mails" }, { label: "Assistir ao controle de abastecimento" }]
    }
  }
};

function translateProject(project: Project, locale: Locale): Project {
  if (locale === "en") return project;
  const translation = projectTranslations[locale]?.[project.slug];
  if (!translation) return project;
  return {
    ...project, ...translation,
    links: project.links.map((link, index) => ({ ...link, label: translation.links?.[index]?.label ?? link.label })),
    embed: project.embed && translation.embed ? { ...project.embed, ...translation.embed } : project.embed,
    video: project.video && translation.video ? { ...project.video, ...translation.video } : project.video,
  };
}

export function getProjects(locale: Locale = "en") {
  return projects.map((project) => translateProject(project, locale));
}

export function getProject(slug: string, locale: Locale = "en") {
  const project = projects.find((item) => item.slug === slug);
  return project ? translateProject(project, locale) : undefined;
}

export function getNextProject(slug: string, locale: Locale = "en") {
  const currentIndex = projects.findIndex((project) => project.slug === slug);
  return translateProject(currentIndex === -1 ? projects[0] : projects[(currentIndex + 1) % projects.length], locale);
}
