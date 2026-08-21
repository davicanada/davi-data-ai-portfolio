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
  | "agent"
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
};

type ProjectTranslation = Pick<Project, "shortTitle" | "title" | "kicker" | "status" | "summary" | "metrics" | "problem" | "approach" | "built" | "architecture" | "decisions" | "result" | "next"> & {
  links?: Array<{ label: string }>;
  embed?: { title: string; description: string };
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
    slug: "job-hunter-agent",
    shortTitle: "Job Hunter Agent",
    title: "An AI pipeline that ranks opportunities and prepares applications",
    kicker: "Python · AI workflow automation",
    status: "Historical scheduled workflow",
    summary:
      "A Python workflow that gathers remote data jobs, removes duplicates, evaluates fit with several AI providers, prepares tailored documents and sends the strongest matches to Telegram.",
    categories: ["Data Engineering", "Applied AI"],
    tools: [
      "Python",
      "Supabase",
      "GitHub Actions",
      "Gemini",
      "Groq",
      "OpenRouter",
      "Telegram",
      "python-docx",
    ],
    visual: "agent",
    accent: "blue",
    metrics: [
      { value: "236", label: "historical workflow runs" },
      { value: "220", label: "successful runs" },
      { value: "142", label: "tests in the latest run" },
      { value: "3", label: "AI provider groups" },
    ],
    problem:
      "Searching for relevant jobs means visiting several sources, reviewing repeated listings and preparing the same documents again and again. I wanted one workflow that could handle those steps and keep a clear record of every result.",
    approach:
      "The workflow applies simple rules before calling an AI model, stores every stage in Supabase and tries another provider when the first one is unavailable.",
    built: [
      "Async adapters for multiple job feeds with in-batch and database deduplication.",
      "Heuristic prefiltering before LLM scoring to control cost and noise.",
      "A Gemini, Groq and OpenRouter fallback sequence with usage-limit tracking.",
      "Token, latency, success, and error telemetry for every model attempt.",
      "Tailored résumés and cover letters rendered to DOCX with atomic writes.",
      "Telegram delivery and persistent notification state to prevent repeats.",
    ],
    architecture: [
      "Remote job sources",
      "Async fetch + normalize",
      "Supabase deduplication",
      "Deterministic prefilter",
      "LLM score + tailor",
      "DOCX + Telegram delivery",
    ],
    decisions: [
      {
        title: "Use rules before AI",
        detail:
          "Simple rules remove obvious mismatches before any model call. This saves time and makes the first stage easy to explain.",
      },
      {
        title: "Record every fallback",
        detail:
          "Provider changes, usage limits, response time and token use are recorded instead of being hidden inside a retry loop.",
      },
      {
        title: "Guard against invented résumé claims",
        detail:
          "Returned highlights are checked against the structured profile; unsupported output falls back to a deterministic selection.",
      },
    ],
    result:
      "The project shows a complete AI automation workflow with source collection, deduplication, model monitoring, document generation and delivery.",
    next:
      "I would add a fixed evaluation set for scoring quality, reactivate the schedule and build a small monitoring page for source results, provider reliability, cost and application outcomes.",
    links: [
      {
        label: "View source",
        href: "https://github.com/davicanada/job-hunter-agent",
        kind: "github",
      },
    ],
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
    "job-hunter-agent": {
      shortTitle: "Agent de recherche d'emploi", title: "Un pipeline d'IA qui classe les offres et prépare les candidatures", kicker: "Python · Automatisation avec l'IA", status: "Flux planifié historique",
      summary: "Un flux Python qui recueille des offres d'emploi à distance, retire les doublons, évalue la correspondance avec plusieurs fournisseurs d'IA, prépare des documents adaptés et transmet les meilleures offres dans Telegram.",
      metrics: [{ value: "236", label: "exécutions historiques" }, { value: "220", label: "exécutions réussies" }, { value: "142", label: "tests lors de la dernière exécution" }, { value: "3", label: "groupes de fournisseurs d'IA" }],
      problem: "Chercher des offres pertinentes exige de consulter plusieurs sources, revoir les mêmes annonces et préparer sans cesse des documents similaires. Je voulais un seul flux qui gère ces étapes et conserve un historique clair de chaque résultat.",
      approach: "Le flux applique des règles simples avant d'appeler un modèle d'IA, enregistre chaque étape dans Supabase et essaie un autre fournisseur lorsque le premier est indisponible.",
      built: ["Adaptateurs asynchrones pour plusieurs sources avec dédoublonnage dans le lot et la base.", "Préfiltrage par règles avant l'évaluation LLM pour limiter les coûts et le bruit.", "Chaîne de repli Gemini, Groq et OpenRouter avec suivi des limites d'utilisation.", "Télémétrie des jetons, de la latence, des réussites et des erreurs pour chaque tentative.", "CV et lettres adaptés en DOCX avec écritures atomiques.", "Envoi dans Telegram et état persistant pour éviter les avis répétés."],
      architecture: ["Sources d'emploi", "Collecte asynchrone + normalisation", "Dédoublonnage Supabase", "Préfiltre déterministe", "Évaluation + adaptation LLM", "DOCX + envoi Telegram"],
      decisions: [{ title: "Utiliser des règles avant l'IA", detail: "Des règles simples éliminent les incompatibilités évidentes avant tout appel au modèle. Cette étape réduit les coûts et reste facile à expliquer." }, { title: "Consigner chaque solution de repli", detail: "Les changements de fournisseur, limites d'utilisation, temps de réponse et jetons sont enregistrés plutôt que cachés dans une boucle de relance." }, { title: "Éviter les affirmations inventées", detail: "Les éléments proposés sont comparés au profil structuré; tout résultat non justifié revient à une sélection déterministe." }],
      result: "Ce projet démontre un flux complet d'automatisation avec collecte, dédoublonnage, supervision des modèles, génération de documents et livraison.",
      next: "J'ajouterais un jeu d'évaluation fixe, réactiverais la planification et créerais une page de suivi des sources, de la fiabilité, des coûts et des résultats.", links: [{ label: "Voir le code source" }]
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
    "job-hunter-agent": {
      shortTitle: "Agente de búsqueda de empleo", title: "Un pipeline de IA que clasifica oportunidades y prepara candidaturas", kicker: "Python · Automatización con IA", status: "Flujo programado histórico",
      summary: "Un flujo en Python que reúne empleos remotos de datos, elimina duplicados, evalúa la compatibilidad con varios proveedores de IA, prepara documentos personalizados y envía las mejores oportunidades por Telegram.",
      metrics: [{ value: "236", label: "ejecuciones históricas" }, { value: "220", label: "ejecuciones exitosas" }, { value: "142", label: "pruebas en la última ejecución" }, { value: "3", label: "grupos de proveedores de IA" }],
      problem: "Buscar vacantes relevantes implica visitar varias fuentes, revisar anuncios repetidos y preparar documentos similares una y otra vez. Quería un solo flujo que gestionara esas etapas y mantuviera un registro claro.",
      approach: "El flujo aplica reglas simples antes de consultar un modelo de IA, registra cada etapa en Supabase y prueba otro proveedor cuando el primero no está disponible.",
      built: ["Adaptadores asíncronos para varias fuentes con eliminación de duplicados.", "Prefiltro por reglas antes de la evaluación LLM para controlar coste y ruido.", "Alternativas entre Gemini, Groq y OpenRouter con seguimiento de límites.", "Telemetría de tokens, latencia, éxito y errores en cada intento.", "Currículos y cartas personalizados en DOCX con escritura atómica.", "Envío por Telegram y estado persistente para evitar notificaciones repetidas."],
      architecture: ["Fuentes de empleo", "Recopilación asíncrona + normalización", "Eliminación de duplicados en Supabase", "Prefiltro determinista", "Evaluación + personalización LLM", "DOCX + entrega por Telegram"],
      decisions: [{ title: "Usar reglas antes de la IA", detail: "Las reglas simples eliminan incompatibilidades evidentes antes de llamar al modelo. Esto ahorra tiempo y hace que la primera etapa sea fácil de explicar." }, { title: "Registrar cada alternativa", detail: "Los cambios de proveedor, límites, tiempos de respuesta y tokens quedan registrados en lugar de ocultarse en reintentos." }, { title: "Evitar afirmaciones inventadas", detail: "Los resultados se comparan con el perfil estructurado; cualquier elemento sin respaldo vuelve a una selección determinista." }],
      result: "El proyecto demuestra un flujo completo de automatización con recopilación, deduplicación, monitoreo de modelos, generación de documentos y entrega.",
      next: "Añadiría un conjunto fijo de evaluación, reactivaría la programación y crearía una página para monitorear fuentes, confiabilidad, coste y resultados.", links: [{ label: "Ver código fuente" }]
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
    "job-hunter-agent": {
      shortTitle: "Agente de Busca de Vagas", title: "Um pipeline de IA que classifica oportunidades e prepara candidaturas", kicker: "Python · Automação de fluxos com IA", status: "Fluxo agendado histórico",
      summary: "Um fluxo em Python que coleta vagas remotas de dados, remove duplicidades, avalia a compatibilidade com vários provedores de IA, prepara documentos personalizados e envia as melhores oportunidades pelo Telegram.",
      metrics: [{ value: "236", label: "execuções históricas" }, { value: "220", label: "execuções bem-sucedidas" }, { value: "142", label: "testes na última execução" }, { value: "3", label: "grupos de provedores de IA" }],
      problem: "Buscar vagas relevantes exige visitar várias fontes, revisar anúncios repetidos e preparar os mesmos documentos diversas vezes. Eu queria um único fluxo que cuidasse dessas etapas e mantivesse um registro claro de cada resultado.",
      approach: "O fluxo aplica regras simples antes de consultar um modelo de IA, registra cada etapa no Supabase e tenta outro provedor quando o primeiro está indisponível.",
      built: ["Adaptadores assíncronos para várias fontes de vagas, com remoção de duplicidades no lote e no banco.", "Pré-filtro por regras antes da avaliação por LLM para controlar custo e ruído.", "Sequência de alternativas entre Gemini, Groq e OpenRouter com controle de limites de uso.", "Telemetria de tokens, latência, sucesso e erro para cada tentativa.", "Currículos e cartas personalizados em DOCX com gravação atômica.", "Envio pelo Telegram e estado persistente das notificações para evitar repetições."],
      architecture: ["Fontes de vagas remotas", "Coleta assíncrona + padronização", "Remoção de duplicidades no Supabase", "Pré-filtro determinístico", "Avaliação + personalização por LLM", "DOCX + envio pelo Telegram"],
      decisions: [{ title: "Usar regras antes da IA", detail: "Regras simples eliminam incompatibilidades óbvias antes de qualquer chamada ao modelo. Isso economiza tempo e deixa a primeira etapa fácil de explicar." }, { title: "Registrar cada alternativa", detail: "Mudanças de provedor, limites de uso, tempo de resposta e consumo de tokens são registrados em vez de ficarem escondidos em tentativas automáticas." }, { title: "Evitar informações inventadas no currículo", detail: "Os destaques retornados são comparados ao perfil estruturado; resultados sem suporte voltam para uma seleção determinística." }],
      result: "O projeto demonstra um fluxo completo de automação com IA, incluindo coleta, remoção de duplicidades, monitoramento dos modelos, geração de documentos e entrega.",
      next: "Eu adicionaria um conjunto fixo de avaliação da qualidade, reativaria o agendamento e criaria uma página de monitoramento para fontes, confiabilidade, custo e resultados das candidaturas.",
      links: [{ label: "Ver código-fonte" }]
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
