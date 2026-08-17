import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "somatch — From brief to perfect match",
  description: "Votre brief. Notre IA. Les bons créateurs.",
};

const profiles = [
  { initials: "CR", name: "Profil 1", category: "Lifestyle", score: 92, tone: "purple" },
  { initials: "MA", name: "Profil 2", category: "Mode", score: 89, tone: "orange" },
  { initials: "SK", name: "Profil 3", category: "Beauté", score: 88, tone: "pink" },
  { initials: "LN", name: "Profil 4", category: "Lifestyle", score: 85, tone: "blue" },
  { initials: "YA", name: "Profil 5", category: "Lifestyle", score: 82, tone: "green" },
];

function Brand({ symbol = false }: { symbol?: boolean }) {
  return <img className={symbol ? "brand-symbol" : "brand-logo"} src={symbol ? "/assets/section-one/somatch-symbol.png" : "/assets/section-one/somatch-logo.png"} alt={symbol ? "" : "somatch"} />;
}

function Header() {
  return <header className="site-header"><div className="header-inner">
    <a href="#top" aria-label="Accueil somatch"><Brand /></a>
    <nav aria-label="Navigation principale"><a href="#why">Pourquoi somatch</a><a href="#features">Fonctionnalités</a><a href="#audiences">Pour qui</a><a href="#resources">Ressources</a><a href="#pricing">Tarifs</a></nav>
    <div className="header-actions"><a className="login" href="#login">Se connecter</a><a className="demo-button" href="#demo">Demander une démo <span>→</span></a></div>
    <a className="mobile-demo" href="#demo">Démo <span>→</span></a>
  </div></header>;
}

function FlowHeader() {
  return <div className="flow-header">
    <div className="flow-step"><span className="flow-icon purple">▣</span><div><b>1. Brief</b><small>Votre campagne</small></div></div>
    <div className="flow-arrow"><i /><span>→</span></div>
    <div className="ai-bubble"><Brand symbol /></div>
    <div className="flow-step ai-label"><div><b>2. somatch AI</b><small>Analyse intelligente</small></div></div>
    <div className="flow-arrow short"><i /><span>→</span></div>
    <div className="flow-step"><span className="flow-icon green">♙</span><div><b>3. 5 profils recommandés</b><small>Les meilleurs matches</small></div></div>
  </div>;
}

function BriefPanel() {
  const items = [
    ["▣", "Campagne", "Back to School 2026", "purple"],
    ["◎", "Objectif", "Notoriété & Engagement", "pink"],
    ["♙", "Cible", "13–25 ans", "orange"],
    ["#", "Plateformes", "Instagram, TikTok, YouTube", "purple"],
    ["▱", "Budget", "25 000 €", "green"],
  ];
  return <div className="brief-panel"><h3>Votre brief</h3><div className="brief-items">{items.map(([icon,title,text,tone])=><div className="brief-item" key={title}><span className={`brief-icon ${tone}`}>{icon}</span><div><b>{title}</b><small>{text}</small></div></div>)}</div></div>;
}

function OrbitPanel() {
  return <div className="orbit-panel"><h3>somatch AI analyse</h3><strong>50K+ créateurs analysés</strong><div className="orbit-scene">
    <div className="orbit-ring ring-one"/><div className="orbit-ring ring-two"/><div className="orbit-ring ring-three"/>
    <div className="orbit-center"><Brand symbol /></div>
    <div className="orbit-point audience"><span className="purple">♙</span><b>Audience</b></div>
    <div className="orbit-point budget"><span className="purple">▱</span><b>Budget</b></div>
    <div className="orbit-point engagement"><span className="pink">♡</span><b>Engagement</b></div>
    <div className="orbit-point performance"><span className="green">↗</span><b>Performance</b></div>
    <div className="orbit-point brand-fit"><span className="orange">☆</span><b>Brand Fit</b></div>
  </div></div>;
}

function ProfilesPanel() {
  return <div className="profiles-panel"><h3>5 profils recommandés</h3><div className="profile-list">{profiles.map(p=><article key={p.name}><span className={`profile-avatar ${p.tone}`}>{p.initials}</span><div><b>{p.name}</b><small>{p.category}</small></div><strong>{p.score}/100</strong><span className="favorite">☆</span></article>)}</div></div>;
}

function ProductCard() {
  return <div className="product-card"><FlowHeader/><div className="product-body"><BriefPanel/><OrbitPanel/><ProfilesPanel/></div><div className="metrics">
    <div><span className="metric-icon purple">◉</span><p><b>1.2M</b><small>Reach estimé</small></p></div>
    <div><span className="metric-icon pink">♡</span><p><b>3.8%</b><small>Engagement moyen</small></p></div>
    <div><span className="metric-icon orange">▱</span><p><b>24 500 €</b><small>Budget estimé</small></p></div>
  </div></div>;
}

const trustLogos = [
  ["LC Waikiki", "/assets/trust/lc-waikiki.png"],
  ["Carrefour", "/assets/trust/carrefour.png"],
  ["Laboratoires Filorga", "/assets/trust/filorga.png"],
  ["Uriage", "/assets/trust/uriage.png"],
  ["Sonarges", "/assets/trust/sonarges.png"],
  ["Kazyon Market", "/assets/trust/kazyon.png"],
  ["Mustela", "/assets/trust/mustela.png"],
  ["Forté Pharma", "/assets/trust/forte-pharma.png"],
  ["Bioderma", "/assets/trust/bioderma.png"],
];

function TrustSection() {
  const loop = [...trustLogos, ...trustLogos];
  return <section className="trust-section" aria-label="Marques partenaires">
    <div className="logo-marquee"><div className="logo-track">{loop.map(([name,src],index)=><div className="trust-logo" key={`${name}-${index}`} aria-hidden={index >= trustLogos.length}><img src={src} alt={index < trustLogos.length ? name : ""}/></div>)}</div></div>
  </section>;
}

const moroccoHighlights=[["♡","Créent de la proximité"],["☆","Inspirent et divertissent"],["♙","Rassemblent des communautés engagées"],["⌖","Ancrés dans les réalités locales"],["⌁","Génèrent un impact mesurable"]];
function MoroccanInsightSection(){return <section className="morocco-section" aria-label="Insight marocain"><div className="morocco-main"><img src="/assets/insight-marocain.png" alt="Au Maroc, l’influence est locale, variée et puissante"/></div><div className="morocco-titles">{moroccoHighlights.map(([icon,title])=><div key={title}><span aria-hidden="true">{icon}</span><b>{title}</b></div>)}</div><div className="morocco-callout"><div className="morocco-callout-card"><span aria-hidden="true">✦</span><p><b>somatch</b> vous aide à identifier les bons créateurs,<br/>pour les bonnes audiences et les bons objectifs.</p><i/><p>Des matches pertinents,<br/>basés sur la data et la compréhension<br/>profonde des audiences marocaines.</p></div></div></section>}

const benefits = [
  { number: "01", title: <>Gagnez du temps</>, text: <>Jusqu’à 80 % de recherche<br/>en moins.</>, icon: "clock", tone: "rose" },
  { number: "02", title: <>Décidez avec plus<br/>de précision</>, text: <>Des données fiables +<br/>le somatch Score.</>, icon: "target", tone: "violet" },
  { number: "03", title: <>Justifiez vos choix</>, text: <>Des recommandations<br/>argumentées par l’IA.</>, icon: "shield", tone: "rose" },
  { number: "04", title: <>Mesurez l’impact</>, text: <>Des KPIs estimés<br/>dès le casting.</>, icon: "chart", tone: "violet" },
];

function BenefitsSection() {
  return <section className="benefits-section" id="why" aria-labelledby="benefits-title">
    <div className="benefits-intro"><span className="section-pill"><i>✦</i> POURQUOI SOMATCH</span><h2 id="benefits-title">La bonne technologie.<br/>De <span>vrais résultats.</span></h2></div>
    <div className="benefits-grid">{benefits.map((benefit)=><article className={`benefit-card ${benefit.tone}`} key={benefit.number}>
      <div className="benefit-icon-wrap"><span className={`drawn-icon ${benefit.icon}`} aria-hidden="true"><i/><b/><em/></span></div>
      <span className="benefit-number">{benefit.number}</span><h3>{benefit.title}</h3><p>{benefit.text}</p><i className="benefit-accent"/>
    </article>)}</div>
  </section>;
}

const problemCreators = [
  ["/assets/creators/anas-el-hamedouchi.png", "345K"], ["/assets/creators/bessam-cheham.png", "120K"],
  ["/assets/creators/sofia-guedira.png", "850K"], ["/assets/creators/souhaila-abbad.png", "230K"],
  ["/assets/creators/tasnim.png", "230K"], ["/assets/creators/sofia-guedira.png", "98K"],
  ["/assets/creators/anas-el-hamedouchi.png", "96K"], ["/assets/creators/tasnim.png", "540K"],
];

const problems = [
  ["01", "Trop de profils", <>Des milliers de créateurs,<br/>mais peu de visibilité sur leur<br/>pertinence réelle.</>],
  ["02", "Données dispersées", <>Audience, performances et<br/>engagement répartis sur<br/>plusieurs sources.</>],
  ["03", <>Décisions difficiles<br/>à justifier</>, <>Des castings encore trop<br/>souvent basés sur l’intuition<br/>plutôt que sur des critères<br/>mesurables.</>],
];

function ProblemVisuals() {
  return <div className="problem-visuals">
    <div className="problem-visual creator-cloud"><span className="visual-orb users">♙</span><div className="creator-cloud-grid">{problemCreators.map(([src,count],i)=><div key={i}><img src={src} alt=""/><small>♟ {count}</small></div>)}</div></div>
    <div className="problem-visual data-cloud"><span className="visual-orb database">▱</span><span className="source instagram">◎</span><span className="source tiktok">♪</span><span className="source youtube">▶</span><span className="source sheets">▦</span><span className="source stats">▥</span><div className="mini-chart"><small>Data</small><i/><b/><em/></div><div className="data-ring"/></div>
    <div className="problem-visual decision-cloud"><span className="visual-orb scales">⚖</span><div className="question">?</div><span className="decision-tag intuition">◉ &nbsp; Intuition</span><span className="decision-tag availability">▦ &nbsp; Disponibilités</span><span className="decision-tag affinity">♥ &nbsp; Affinité</span><span className="decision-tag budget-tag">$ &nbsp; Budget</span></div>
  </div>;
}

function ProblemSection() {
  return <section className="problem-section" aria-labelledby="problem-title"><div className="problem-mesh"/><div className="problem-copy"><span className="problem-pill">△ &nbsp; LE PROBLÈME</span><h2 id="problem-title">Trouver les<br/>bons créateurs<br/>ne devrait pas<br/>prendre des<br/><span>heures.</span></h2><p>Les méthodes actuelles sont lentes,<br/>complexes et peu fiables.</p><i/></div><ProblemVisuals/><div className="problem-list">{problems.map(([number,title,text],index)=><article key={number as string} className={`problem-item p${index+1}`}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>;
}

function CampaignsSection() {
  return <section className="campaigns-section campaigns-image-section" aria-label="Nos campagnes récentes"><img src="/assets/campaigns-section.png" alt="Découvrez nos campagnes récentes"/><div className="campaign-poster-motion" aria-hidden="true">{Array.from({length:6},(_,i)=><span key={i}/>)}</div></section>;
}

const processSteps = [
  { number: "01", icon: "▧", title: "Brief", text: <>Décrivez votre campagne,<br/>vos objectifs, votre cible<br/>et votre budget.</>, caption: "Votre besoin", badge: "♙", tone: "pink" },
  { number: "02", icon: "✦", title: <>somatch <b>AI</b></>, text: <>L’IA analyse les données<br/>et identifie les créateurs<br/>les plus pertinents.</>, caption: "50K+ profils analysés", badge: "▤", tone: "purple" },
  { number: "03", icon: "★", title: "Perfect Match", text: <>Recevez un casting<br/>recommandé, argumenté<br/>et mesurable.</>, caption: "Votre casting", badge: "♕", tone: "orange" },
];

function ProcessSection() {
  return <section className="process-section" id="features" aria-labelledby="process-title">
    <div className="process-intro"><span className="section-pill"><i>✦</i> COMMENT ÇA MARCHE</span><h2 id="process-title">From <b>brief</b> to <b>perfect match.</b></h2><p>3 étapes simples pour trouver les créateurs qui feront la différence.</p></div>
    <div className="process-flow">{processSteps.map((step,index)=><div className="process-step-wrap" key={step.number}><article className={`process-step ${step.tone} ${index===1?"featured":""}`}><span className="process-number">{step.number}</span><span className="process-icon" aria-hidden="true">{step.icon}</span><h3>{step.title}</h3><i/><p>{step.text}</p></article><div className={`process-caption ${step.tone}`}><span>{step.badge}</span><b>{step.caption}</b></div>{index<2&&<div className={`process-connector c${index+1}`} aria-hidden="true"><i/><span>→</span><i/></div>}</div>)}</div>
    <div className="process-proof"><div><span>ϟ</span><p><b>Jusqu’à 80%</b><small>de temps gagné</small></p></div><div><span>◎</span><p><b>Des recommandations</b><small>précises et argumentées</small></p></div><div><span>▥</span><p><b>Des décisions</b><small>basées sur la data</small></p></div><div><span>♢</span><p><b>Des résultats</b><small>alignés à vos objectifs</small></p></div></div>
  </section>;
}

const briefRows = [["◎","Objectif","Booster la notoriété et générer de l’engagement autour d’un lancement."],["♙","Cible","Femmes 18-35 ans · Maroc"],["♧","Plateformes","Instagram · TikTok · YouTube"],["▱","Budget","25 000 €"],["◇","Catégorie","Beauty & Skincare"]];
const recommendationStats = [["♙","5","profils recommandés"],["☆","86/100","score moyen"],["◉","1,2M","Reach estimé"],["♡","3,8 %","Engagement moyen"],["€","24 500 €","Budget estimé"]];

function AISection(){return <section className="ai-section" aria-labelledby="ai-title"><div className="ai-intro"><span className="section-pill"><i>✦</i> SOMATCH AI</span><h2 id="ai-title">Votre brief devient une<br/><b>recommandation stratégique.</b></h2><p>somatch AI analyse votre campagne, croise les données<br/>et construit un casting adapté à vos objectifs.</p></div><div className="ai-stage">
  <article className="ai-brief-card"><h3>▧ &nbsp; VOTRE BRIEF</h3>{briefRows.map(([icon,title,text])=><div className="ai-brief-row" key={title}><span>{icon}</span><p><b>{title}</b><small>{text}</small></p></div>)}</article>
  <div className="ai-engine"><div className="ai-orbits"><i/><i/><i/><span className="ai-chip audience-chip">♙ &nbsp; Audience</span><span className="ai-chip engagement-chip">♡ &nbsp; Engagement</span><span className="ai-chip brand-chip">♢ &nbsp; Brand Fit</span><span className="ai-chip content-chip">▣ &nbsp; Content</span><span className="ai-chip performance-chip">▥ &nbsp; Performance</span><div className="ai-core"><strong>✦</strong><b>somatch <em>AI</em></b></div></div><div className="ai-loading">✣ &nbsp; Analyse en cours...</div></div>
  <article className="ai-result-card"><h3>✦ &nbsp; RECOMMANDATION SOMATCH AI</h3><div className="ai-stats">{recommendationStats.map(([icon,value,label])=><div key={label}><span>{icon}</span><b>{value}</b><small>{label}</small></div>)}</div><div className="ai-reasons"><h4>Pourquoi ce casting ?</h4><p><span>✓</span><b>Audience alignée avec votre cible</b><small>Intérêts, âge, localisation, comportements.</small></p><p><span>✓</span><b>Créateurs performants sur vos plateformes</b><small>Historique de performance et formats optimaux.</small></p><p><span>✓</span><b>Équilibre optimal entre reach, engagement et budget</b><small>Un mix intelligent pour maximiser votre ROI.</small></p></div><a href="#demo">Tester somatch AI &nbsp; →</a><small className="no-card">♙ &nbsp; Aucune carte bancaire requise</small></article>
  </div><div className="ai-benefits"><div><span>✿</span><p><b>Données multi-sources</b><small>Mises à jour en temps réel</small></p></div><div><span>⌕</span><p><b>Analyse intelligente</b><small>de milliers de signaux</small></p></div><div><span>◎</span><p><b>Recommandations</b><small>précises et argumentées</small></p></div><div><span>◷</span><p><b>Gain de temps</b><small>considérable</small></p></div><div><span>♢</span><p><b>Décisions confiantes</b><small>basées sur la data</small></p></div></div></section>}

const featurePanels=[["01","Explorer","Accédez à une base de créateurs qualifiés et filtrez selon vos critères clés.","/assets/features/explorer.png"],["02","Analyser","Accédez à des analyses détaillées pour évaluer chaque profil en profondeur.","/assets/features/analyser.png"],["03","Comparer","Comparez jusqu’à 3 profils côte à côte et choisissez le meilleur match.","/assets/features/comparer.png"]];
function FeaturesSection(){return <section className="features-section" aria-labelledby="features-dark-title"><div className="features-head"><div><span>✦ &nbsp; FONCTIONNALITÉS</span><h2 id="features-dark-title">Trouvez le <b>bon profil.</b><br/>Avec les <b>bonnes données.</b></h2><p>Explorez, analysez et comparez les créateurs avant de faire votre choix.</p></div><div className="feature-trust"><div>⌕<b>Base qualifiée</b><small>50K+ créateurs</small></div><div>♢<b>Données fiables</b><small>mises à jour en continu</small></div><div>↗<b>Analyses avancées</b><small>propulsées par l’IA</small></div><div>▣<b>Confidentiel</b><small>et sécurisé</small></div></div></div><div className="feature-grid">{featurePanels.map(([n,title,text,img])=><article key={n}><div className="feature-label"><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></div><img src={img} alt={`Interface somatch — ${title}`}/></article>)}</div><a className="feature-cta" href="#creators">Explorer les créateurs &nbsp; →</a><div className="feature-footer"><div><span>⌕</span><p><b>Recherche puissante</b><small>Trouvez en quelques secondes</small></p></div><div><span>◔</span><p><b>Données complètes</b><small>Pour des décisions éclairées</small></p></div><div><span>⚖</span><p><b>Comparaison intelligente</b><small>Le bon choix, en toute confiance</small></p></div><div><span>◷</span><p><b>Gain de temps</b><small>Moins de recherche, plus de résultats</small></p></div></div></section>}

const workflowSteps=[["♡","Favoris","Sauvegardez vos profils préférés."],["⚖","Comparaison","Comparez et identifiez les meilleurs matchs."],["♙","Casting","Composez votre casting idéal en quelques clics."],["▦","Campagne","Lancez et pilotez votre campagne facilement."]];
function CampaignWorkflowSection(){return <section className="workflow-section" aria-labelledby="workflow-title"><div className="workflow-intro"><span className="section-pill"><i>✦</i> DE LA DÉCOUVERTE À LA CAMPAGNE</span><h2 id="workflow-title">Du <b>match</b> à la <b>campagne.</b><br/>Sans changer d’outil.</h2><p>Centralisez votre sélection et transformez vos meilleurs profils<br/>en casting prêt à activer.</p></div><div className="workflow-steps">{workflowSteps.map(([icon,title,text],i)=><article key={title} className={`wf-${i}`}><span>{icon}</span><div><h3>{title}</h3><p>{text}</p></div>{i<3&&<i>→</i>}</article>)}</div><div className="workflow-showcase"><aside className="workflow-side left"><span>▱</span><h3>Tout centraliser</h3><p>Retrouvez brief, casting<br/>et données au même<br/>endroit.</p></aside><img src="/assets/campaign-workflow/dashboard.png" alt="Tableau de bord de création de campagne somatch"/><aside className="workflow-side right"><div><span>☷</span><h3>Garder le contrôle</h3><p>Ajoutez, retirez ou<br/>comparez des profils<br/>facilement.</p></div><div><span>♢</span><h3>Passer à l’action</h3><p>Transformez votre<br/>recommandation somatch AI<br/>en campagne.</p></div></aside></div><a className="workflow-cta" href="#create-campaign">Créer ma campagne &nbsp; →</a><small className="workflow-secure">♙ &nbsp; Sécurisé et 100% en ligne</small><div className="workflow-dots left"/><div className="workflow-dots right"/></section>}

const audiences=[{n:"01",title:"Marques",lead:"Trouvez les créateurs qui correspondent vraiment à votre marque.",text:"Recherche, analyse, casting et pilotage de campagne au même endroit.",tone:"brand",features:[["◎","Ciblez la bonne audience"],["▥","Analysez avec précision"],["♡","Sélectionnez les meilleurs profils"],["♢","Pilotez et mesurez vos campagnes"]]},{n:"02",title:"Agences",lead:"Construisez vos recommandations plus vite.",text:"Gagnez du temps sur le sourcing, comparez les profils et justifiez vos castings avec la data.",tone:"agency",features:[["◷","Sourcing plus rapide"],["⚖","Décisions justifiées"],["♙","Recommandations impactantes"],["↗","Résultats mesurables"]]},{n:"03",title:"Créateurs",lead:"Faites de vos données une force.",text:"Valorisez votre profil et facilitez votre découverte par les marques et agences.",tone:"creator",features:[["◉","Plus de visibilité"],["♕","Profil valorisé"],["♢","Collaborations pertinentes"]]}];
function AudienceVisual({tone}:{tone:string}){if(tone==="brand")return <div className="audience-visual brand-ui"><b>✦ somatch</b><i>⌕ &nbsp; Rechercher un créateur...</i>{[86,82,79].map(v=><span key={v}><em>{v}</em><u/><u/><small>▥ &nbsp; ☆</small></span>)}</div>;if(tone==="agency")return <div className="audience-visual agency-ui"><div className="mini-graph">⌁</div><div className="mini-donut">◔</div><p>✓ &nbsp; Data fiable<br/>✓ &nbsp; Comparaison avancée<br/>✓ &nbsp; Recommandations argumentées</p></div>;return <div className="audience-visual creator-ui"><span>◉</span><i/><i/><div><b>12.5K</b><small>Followers</small></div><div><b>4.1%</b><small>Engagement</small></div></div>}
function AudiencesSection(){return <section className="audiences-section" id="audiences" aria-labelledby="audiences-title"><div className="audiences-intro"><span className="section-pill"><i>♙</i> POUR QUI ?</span><h2 id="audiences-title">Pensé pour ceux<br/>qui font <b>l’influence.</b></h2><p>somatch accompagne chaque acteur de l’écosystème influence.</p></div><div className="audiences-grid">{audiences.map(a=><article className={`audience-card ${a.tone}`} key={a.n}><span className="audience-number">{a.n}</span><h3>{a.title}</h3><i className="audience-line"/><div className="audience-copy"><h4>{a.lead}</h4><p>{a.text}</p></div><AudienceVisual tone={a.tone}/><div className="audience-features">{a.features.map(([icon,text])=><div key={text}><span>{icon}</span><small>{text}</small></div>)}</div><a href="#demo">Découvrir &nbsp; →</a></article>)}</div><div className="audiences-footer"><span>✦</span><b>Un outil unique, trois façons de créer plus d’impact.</b><i/> <p>somatch réunit la data, l’IA et l’expertise pour connecter les bonnes personnes aux bonnes campagnes.</p></div></section>}

const trustMetrics=[["♙","50K+","Créateurs analysés"],["◔","360°","Analyse du profil"],["☆","100","somatch Score"],["◎ ♪ ▶","Multi-platform","Instagram · TikTok · YouTube"]];
const analysisPillars=[["♙","Audience","Démographie, intérêts, localisation et affinités."],["♡","Engagement","Taux d’engagement, qualité des interactions et authenticité."],["▥","Performance","Vues moyennes, portée, croissance et récurrence des résultats."],["♢","Brand Fit","Adéquation avec votre marque, vos valeurs et vos objectifs."],["▣","Contenu","Formats, qualité éditoriale, créativité et capacité à performer."],["⌖","Localisation","Zones géographiques, langue et pertinence culturelle."]];
function DataTrustSection(){return <section className="data-trust-section" aria-labelledby="data-trust-title"><div className="dt-intro"><span>♢ &nbsp; DATA &amp; TRUST</span><h2 id="data-trust-title">Des décisions <b>basées</b><br/>sur les <b>données.</b></h2><p>La créativité reste humaine. somatch vous donne les données pour mieux décider.</p></div><div className="dt-metrics">{trustMetrics.map(([icon,value,label],i)=><article key={label} className={`dtm-${i}`}><span>{icon}</span><strong>{value}</strong><b>{label}</b><i/></article>)}</div><div className="dt-divider"><i/>somatch analyse chaque profil selon 6 piliers clés<i/></div><div className="dt-pillars">{analysisPillars.map(([icon,title,text],i)=><article key={title} className={`dtp-${i}`}><span>{icon}</span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="dt-explain"><div className="dt-shield">♢</div><div><h3>Des recommandations <b>expliquées</b>, pas une boîte noire.</h3><p>Chaque score et chaque recommandation somatch sont accompagnés<br/>d’éléments concrets pour comprendre pourquoi un profil correspond<br/>à votre campagne.</p></div><ul><li>Transparence sur les critères utilisés</li><li>Sources de données vérifiées</li><li>Mise à jour continue et contrôlée</li></ul></div></section>}

function FinalCTA(){return <section className="final-cta" aria-labelledby="final-cta-title"><div className="cta-dots top"/><div className="cta-dots bottom"/><div className="cta-orbit"><i/><i/></div><span className="cta-spark" aria-hidden="true">✦</span><div className="cta-content"><div className="cta-brand"><img src="/assets/section-one/somatch-logo.png" alt="somatch"/></div><h2 id="final-cta-title">Your next perfect match starts here<span>.</span></h2><p>Transformez votre prochain brief en casting d’influenceurs<br/>pertinent, argumenté et mesurable.</p><div className="cta-actions"><a href="#start">Commencer avec somatch <span>→</span></a><a href="#demo">Demander une démo <span>→</span></a></div></div></section>}

export default function Home() {
  return <main id="top"><Header/><section className="hero-section"><div className="mesh mesh-left"/><div className="mesh mesh-right"/>
    <div className="hero-copy"><div className="badge"><span>✦</span> L’IA au service de vos campagnes d’influence</div><h1>From brief to<br/>perfect match<span>.</span></h1><p>Votre brief. Notre IA. Les bons créateurs.</p><div className="hero-actions"><a className="primary-cta" href="#start">Commencer avec somatch <span>→</span></a><a className="secondary-cta" href="#platform">Découvrir la plateforme <span>▷</span></a></div></div>
    <ProductCard/>
  </section><TrustSection/><MoroccanInsightSection/><BenefitsSection/><CampaignsSection/><ProcessSection/><AISection/><FeaturesSection/><AudiencesSection/><DataTrustSection/><FinalCTA/></main>;
}
