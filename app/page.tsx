import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "somatch — From brief to perfect match",
  description: "L’IA qui transforme un brief en casting d’influenceurs pertinent, argumenté et mesurable.",
};

const creators = [
  { name: "Anas EL HAMEDOUCHI", category: "Lifestyle", level: "Macro", followers: "612K", score: 92, initials: "AE" },
  { name: "Bessam CHEHAM", category: "Humour", level: "Macro", followers: "487K", score: 89, initials: "BC" },
  { name: "Sofia GUEDIRA", category: "Mode", level: "Mid", followers: "219K", score: 88, initials: "SG" },
  { name: "Souhaila ABBAD", category: "Beauty", level: "Mid", followers: "184K", score: 85, initials: "SA" },
  { name: "Tasnim", category: "Lifestyle", level: "Micro", followers: "96K", score: 82, initials: "T" },
];

function Mark({ compact = false }: { compact?: boolean }) {
  return <a className={`mark ${compact ? "compact" : ""}`} href="#top" aria-label="somatch — Accueil"><span className="mark-dot" />somatch</a>;
}

function ArrowIcon() { return <span aria-hidden="true">↗</span>; }
function CheckIcon() { return <span className="check" aria-hidden="true">✓</span>; }

function ButtonPrimary({ children, href = "#demo" }: { children: React.ReactNode; href?: string }) {
  return <a className="btn btn-primary" href={href}>{children}<ArrowIcon /></a>;
}

function ButtonSecondary({ children, href = "#product" }: { children: React.ReactNode; href?: string }) {
  return <a className="btn btn-secondary" href={href}>{children}<span aria-hidden="true">→</span></a>;
}

function Navbar() {
  return <header className="navbar"><div className="nav-inner">
    <Mark />
    <nav aria-label="Navigation principale">
      <a href="#why">Pourquoi somatch</a><a href="#features">Fonctionnalités</a><a href="#for-who">Pour qui</a><a href="#resources">Ressources</a><a href="#pricing">Tarifs</a>
    </nav>
    <div className="nav-actions"><a className="login" href="#login">Se connecter</a><ButtonPrimary href="#demo">Demander une démo</ButtonPrimary></div>
    <a className="mobile-cta" href="#demo" aria-label="Demander une démo">Démo <span>↗</span></a>
  </div></header>;
}

function Score({ value, small = false }: { value: number; small?: boolean }) {
  return <div className={`score ${small ? "small" : ""}`}><span>{value}</span><small>somatch<br/>Score</small></div>;
}

function Avatar({ creator, large = false }: { creator: typeof creators[number]; large?: boolean }) {
  return <div className={`avatar ${large ? "large" : ""}`} aria-label={`Photo de ${creator.name} à fournir`}><span>{creator.initials}</span></div>;
}

function CreatorCard({ creator, featured = false }: { creator: typeof creators[number]; featured?: boolean }) {
  return <article className={`creator-card ${featured ? "featured" : ""}`}>
    {featured && <span className="best-match">Meilleur match</span>}
    <Avatar creator={creator}/><div className="creator-info"><strong>{creator.name}</strong><span>{creator.category} · {creator.level}</span><small>{creator.followers} followers</small></div>
    <Score value={creator.score} small/><span className="match-pill">Match</span>
  </article>;
}

function SectionHeader({ eyebrow, title, text, align = "center" }: { eyebrow?: string; title: string; text?: string; align?: "center" | "left" }) {
  return <div className={`section-header ${align}`}>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function ProductMockup() {
  return <div className="mockup-wrap"><div className="product-mockup">
    <div className="window-bar"><Mark compact/><div className="window-tools"><span/><span/><span/></div><div className="user-chip">AM</div></div>
    <div className="dashboard">
      <aside className="dash-sidebar"><span className="active">⌁</span><span>◇</span><span>◎</span><span>□</span><span>⚙</span></aside>
      <div className="dash-content">
        <div className="dash-head"><div><small>Nouvelle recommandation</small><h3>Back to School 2026</h3></div><span className="ai-status"><i/> somatch AI · Analyse terminée</span></div>
        <div className="dash-columns">
          <div className="brief-card"><div className="card-label"><span>01</span> Votre brief</div><h4>Back to School 2026</h4>
            <div className="brief-field"><small>Objectifs</small><b>Notoriété · Conversion</b></div><div className="brief-field"><small>Cible</small><b>18–34 ans · Maroc</b></div><div className="brief-field"><small>Plateformes</small><b>Instagram · TikTok</b></div><div className="brief-field"><small>Budget</small><b>180 000 MAD</b></div>
            <div className="analysis-line"><span>✦</span><div><b>142 profils analysés</b><small>en 8 secondes</small></div></div>
          </div>
          <div className="result-card"><div className="result-title"><div><small>Résultat somatch AI</small><h4>Votre casting recommandé</h4></div><span>5 profils</span></div>
            <div className="creator-list">{creators.map((c) => <CreatorCard creator={c} key={c.name}/>)}</div>
            <div className="result-metrics"><div><b>5</b><small>profils sélectionnés</small></div><div><b>87,2</b><small>score moyen</small></div><div><b>172K</b><small>budget estimé</small></div><div><b>4,8%</b><small>engagement estimé</small></div></div>
            <a className="mockup-link" href="#compare">Voir le casting complet <span>→</span></a>
          </div>
        </div>
      </div>
    </div>
  </div><span className="float-tag tag-one">✦ Casting généré en 8 sec.</span><span className="float-tag tag-two"><b>92</b> meilleur match</span></div>;
}

const benefitItems = [
  ["↗", "Gagnez du temps", "jusqu’à 80% de recherche en moins"],
  ["◎", "Prenez de meilleures décisions", "avec des données fiables et un score exclusif"],
  ["✓", "Justifiez vos choix", "avec des recommandations argumentées"],
  ["⌁", "Mesurez l’impact réel", "de vos campagnes"],
];

function LogoStrip() { return <section className="logo-strip"><p>Ils nous font confiance</p><div>{["LC Waikiki", "Carrefour", "URIAGE", "KAZYON", "AGL", "SONARGES"].map((x)=><span key={x}>{x}</span>)}</div></section>; }

function AISystem() {
  return <div className="ai-system">
    <div className="ai-panel input"><span className="panel-kicker">BRIEF STRUCTURÉ</span><h3>Back to School</h3><div className="prompt-lines"><div><small>Objectif</small><b>Générer de la considération</b></div><div><small>Audience</small><b>Gen Z · 18–24 ans · Maroc</b></div><div><small>Budget</small><b>180 000 MAD</b></div><div><small>Canaux</small><b>Instagram · TikTok</b></div></div></div>
    <div className="ai-core"><span className="orbit orbit-one"/><span className="orbit orbit-two"/><div className="core-logo">✦<small>somatch AI</small></div><p>Brief<br/><span>+</span> Data<br/><span>+</span> Affinité</p></div>
    <div className="ai-panel output"><div className="output-head"><div><span className="panel-kicker">CASTING RECOMMANDÉ</span><h3>5 perfect matches</h3></div><span className="confidence">94% confiance</span></div>
      <div className="mini-faces">{creators.map((c,i)=><div key={c.name}><Avatar creator={c}/><span>{["Hero","Reach","Trust","Niche","UGC"][i]}</span><b>{c.score}</b></div>)}</div>
      <div className="output-metrics"><div><small>Budget</small><b>172K MAD</b></div><div><small>Reach estimé</small><b>2,4M</b></div><div><small>Engagement</small><b>4,8%</b></div></div>
      <div className="why-casting"><b>Pourquoi ce casting ?</b><p><CheckIcon/> Audience parfaitement alignée avec la cible</p><p><CheckIcon/> Mix optimal entre reach et engagement</p><p><CheckIcon/> Historique de performance dans la catégorie</p></div>
    </div>
  </div>;
}

function ExplorerDemo() {
  const sample = creators[2];
  return <div className="explorer-demo"><div className="search-panel"><div className="search-top"><span>⌕ Rechercher un créateur, une catégorie...</span><button>Explorer</button></div><div className="filter-row">{["Catégories","Plateformes","Followers","Engagement","Audience","Localisation","somatch Score"].map((x)=><span key={x}>{x}⌄</span>)}</div><div className="search-results"><div className="result-count"><b>2 847 créateurs</b><span>Trier par : Pertinence ⌄</span></div>{creators.slice(0,4).map((c)=><CreatorCard creator={c} key={c.name} featured={c.score===92}/>)}</div></div>
    <div className="profile-sheet"><div className="profile-cover"><span>Perfect match</span></div><Avatar creator={sample} large/><h3>{sample.name}</h3><p>Mode · Lifestyle · Casablanca</p><Score value={sample.score}/><div className="profile-stats"><div><b>219K</b><small>Followers</small></div><div><b>5,2%</b><small>Engagement</small></div><div><b>84K</b><small>Vues moy.</small></div></div><div className="fit-row"><span>Audience cible</span><b>91%</b></div><div className="fit-bar"><i/></div><div className="fit-row"><span>Brand fit</span><b>Excellent</b></div><div className="fit-bar second"><i/></div></div>
  </div>;
}

function CompareTable() {
  return <div className="compare-table"><div className="compare-row compare-head"><div>Profils</div>{creators.slice(0,4).map((c,i)=><div key={c.name} className={i===0?"recommended":""}>{i===0&&<span>Meilleur match</span>}<Avatar creator={c}/><b>{c.name.split(" ")[0]}</b><small>{c.category}</small></div>)}</div>
    {[["Audience","82%","78%","91%","74%"],["Engagement","4,7%","5,1%","5,2%","4,4%"],["Vues moy.","188K","142K","84K","91K"],["Brand fit","Excellent","Très bon","Excellent","Bon"],["somatch Score","92","89","88","85"],["Budget","48K","42K","36K","31K"],["Recommandation AI","Hero campaign","Reach driver","Trust builder","Niche expert"]].map((r)=><div className="compare-row" key={r[0]}>{r.map((x,i)=><div key={i} className={i===1?"recommended":""}>{i===0?<span>{x}</span>:<b>{x}</b>}</div>)}</div>)}
  </div>;
}

export default function Home() {
  return <main id="top">
    <Navbar/>
    <section className="hero"><div className="hero-glow"/><div className="hero-copy"><span className="hero-badge"><i/> L’IA au service de vos campagnes d’influence</span><h1>From brief to<br/><span>perfect match.</span></h1><p>somatch utilise la puissance de l’IA pour transformer votre brief en casting d’influenceurs <b>pertinent, argumenté et mesurable.</b></p><div className="hero-actions"><ButtonPrimary>Commencer avec somatch</ButtonPrimary><ButtonSecondary>Découvrir la plateforme</ButtonSecondary></div><div className="proofs"><span><CheckIcon/> Base de +50K créateurs</span><span><i className="spark">✦</i> IA propriétaire somatch AI</span><span><i className="live"/> Données fiables & mises à jour</span></div></div><ProductMockup/></section>
    <LogoStrip/>
    <section className="benefit-band">{benefitItems.map(([icon,title,text],i)=><div key={title}><span className={`benefit-icon color-${i}`}>{icon}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</section>

    <section className="section problem" id="why"><SectionHeader eyebrow="LE CONSTAT" title="Trouver les bons créateurs ne devrait pas prendre des heures." text="L’influence mérite mieux que des tableurs, des intuitions et des données fragmentées."/>
      <div className="pain-grid">{[["01","Trop de profils","Des milliers de créateurs mais peu de visibilité sur leur pertinence réelle."],["02","Données dispersées","Audience, performances, engagement et historique répartis sur plusieurs sources."],["03","Décisions difficiles à justifier","Des castings parfois basés sur l’intuition plutôt que sur des critères mesurables."]].map(([n,t,p])=><article key={n}><span>{n}</span><div className="pain-symbol">{n==="01"?"⌕":n==="02"?"⌁":"?"}</div><h3>{t}</h3><p>{p}</p></article>)}</div>
    </section>

    <section className="section how" id="features"><SectionHeader eyebrow="COMMENT ÇA MARCHE" title="From brief to perfect match." text="Trois étapes. Des heures de recherche transformées en quelques minutes."/><div className="steps"><span className="step-line"/>{[["01","Brief","Décrivez votre campagne, votre cible, vos objectifs et votre budget."],["02","Intelligence","somatch AI analyse le brief, les données créateurs et la compatibilité avec votre campagne."],["03","Perfect Match","Obtenez un casting recommandé, argumenté, budgété et mesurable."]].map(([n,t,p],i)=><article key={n}><div className={`step-icon s${i}`}>{i===0?"≡":i===1?"✦":"✓"}</div><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div></section>

    <section className="section ai-section" id="product"><SectionHeader eyebrow="SOMATCH AI" title="Votre brief devient une recommandation stratégique." text="somatch AI analyse votre campagne et construit un casting cohérent avec vos objectifs."/><AISystem/><div className="center-cta"><ButtonPrimary>Tester somatch AI</ButtonPrimary><small>Aucune carte bancaire requise</small></div></section>

    <section className="section explore"><div className="split-head"><SectionHeader align="left" eyebrow="EXPLORER" title="Explorez. Analysez. Comparez." text="Trouvez les créateurs qui comptent vraiment pour votre marque. Tous les signaux utiles, réunis au même endroit."/><ButtonSecondary>Explorer les créateurs</ButtonSecondary></div><ExplorerDemo/></section>

    <section className="section compare" id="compare"><SectionHeader eyebrow="COMPARER" title="Comparez avant de décider." text="Mettez les données en perspective. somatch AI révèle le profil qui correspond vraiment à votre campagne."/><CompareTable/></section>

    <section className="section journey"><SectionHeader eyebrow="WORKFLOW" title="De la découverte à la campagne." text="Un espace fluide pour passer de l’idée à l’activation, sans perdre le fil."/><div className="journey-flow">{[["⌕","Explorer","Trouvez"],["♡","Favoris","Enregistrez"],["⇄","Comparer","Décidez"],["▦","Casting","Composez"],["↗","Campagne","Activez"]].map(([icon,title,verb],i)=><div key={title}><span>{String(i+1).padStart(2,"0")}</span><div className={`journey-icon j${i}`}>{icon}</div><small>{verb}</small><h3>{title}</h3>{i<4&&<i>→</i>}</div>)}</div><p className="journey-note"><span>✦</span> Chaque profil est analysé en continu par somatch AI</p></section>

    <section className="section for-who" id="for-who"><SectionHeader eyebrow="POUR QUI" title="Pensé pour les équipes qui pilotent l’influence."/><div className="audience-grid">{[["Marques","Pilotez avec confiance","Trouvez les bons créateurs et construisez des castings plus fiables.","Découvrir pour les marques","brand"],["Agences","Recommandez plus vite","Gagnez du temps dans la recherche, la recommandation et la justification client.","Découvrir pour les agences","agency"],["Créateurs","Rendez-vous visible","Positionnez votre profil et rendez vos données plus accessibles aux marques.","Référencer mon profil","creator"]].map(([t,sub,p,link,cl])=><article className={cl} key={t}><div className="audience-visual"><span>{cl==="brand"?"◎":cl==="agency"?"✦":"◉"}</span><i/><i/><i/></div><small>{t}</small><h3>{sub}</h3><p>{p}</p><a href="#demo">{link} →</a></article>)}</div></section>

    <section className="section data-section" id="resources"><div className="data-copy"><SectionHeader align="left" eyebrow="DATA & CONFIANCE" title="Des décisions basées sur les données." text="Chaque recommandation s’appuie sur des signaux concrets, structurés et régulièrement mis à jour."/><div className="data-points">{[["50K+","créateurs référencés"],["6","dimensions d’analyse"],["24/7","données actualisées"],["1","score propriétaire"]].map(([n,t])=><div key={n}><b>{n}</b><span>{t}</span></div>)}</div></div><div className="data-stack">{["Données d’audience","Taux d’engagement","Performances contenus","Affinité de marque","somatch Score","Mises à jour continues"].map((x,i)=><div key={x} style={{"--i":i} as React.CSSProperties}><span>{["◎","↗","⌁","◇","✦","↻"][i]}</span><b>{x}</b><CheckIcon/></div>)}</div><p className="disclaimer">Les estimations de performances restent indicatives et peuvent évoluer selon le contenu, le budget et le timing.</p></section>

    <section className="final-cta" id="demo"><div className="cta-orbit o1"/><div className="cta-orbit o2"/><span className="eyebrow">PRÊT À COMMENCER ?</span><h2>Your next perfect match<br/><span>starts here.</span></h2><p>Transformez votre prochain brief en casting d’influenceurs pertinent, argumenté et mesurable.</p><div><ButtonPrimary>Commencer avec somatch</ButtonPrimary><ButtonSecondary>Demander une démo</ButtonSecondary></div></section>

    <footer><div className="footer-top"><div className="footer-brand"><Mark/><p>From brief to perfect match.</p><span>L’influence marketing, augmentée par l’intelligence.</span></div>{[["Produit","Explorer","somatch AI","Tendances","Campagnes"],["Solutions","Marques","Agences","Créateurs"],["Ressources","Centre d’aide","Contact","Blog"],["Légal","Confidentialité","Conditions","Cookies"]].map(([head,...links])=><div className="footer-col" key={head}><b>{head}</b>{links.map(x=><a href="#" key={x}>{x}</a>)}</div>)}</div><div className="footer-bottom"><span>© 2026 somatch. Tous droits réservés.</span><div><a href="#">LinkedIn</a><a href="#">Instagram</a><a href="#">TikTok</a><button aria-label="Choisir la langue">FR ⌄</button></div></div></footer>
  </main>;
}
