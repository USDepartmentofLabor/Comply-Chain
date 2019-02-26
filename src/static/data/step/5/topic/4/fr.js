import React from "react";
import usDol from "../../images/usdol.jpg";

const fr = () => {
    return (
        <div>
            <h1>Programmer des audits</h1>
            <p>
                Si vous faites partie d&apos;un groupe sectoriel ou
                plurisectoriel, les syst&egrave;mes et les processus du groupe
                influeront peut-&ecirc;tre sur le moment et la fa&ccedil;on de
                programmer vos audits. Si vous recherchez votre propre
                syst&egrave;me de conformit&eacute; sociale, vous aurez
                plusieurs d&eacute;cisions &agrave; prendre pour programmer vos
                audits.
            </p>
            <p>
                Tout d&apos;abord, si les audits font partie d&apos;un processus
                de contr&ocirc;le pr&eacute;ventif ou de
                pr&eacute;enregistrement (en l&apos;occurrence si vous exigez
                que les fournisseurs potentiels obtiennent une note
                satisfaisante dans un audit avant que vous ne passiez votre
                premi&egrave;re commande), vous programmerez vos audits dans ces
                &eacute;tablissements d&egrave;s que vous estimerez qu&apos;ils
                sont pr&ecirc;ts, en vous fondant sur votre exp&eacute;rience
                des audits et/ou de la formation qu&apos;ils auront
                re&ccedil;ue. Lorsque le fournisseur aura eu de bons
                r&eacute;sultats &agrave; l&apos;audit et aura &eacute;t&eacute;
                enregistr&eacute; sur la liste des fournisseurs de
                l&rsquo;entreprise, les audits devraient &ecirc;tre
                r&eacute;p&eacute;t&eacute;s &agrave; intervalles
                p&eacute;riodiques, selon les conclusions de l&apos;audit.
            </p>
            <div className="example-in-action" id="prereg">
                <h2>
                    <iron-icon icon="icons:lightbulb-outline" />
                    Exemple d&apos;action&nbsp;: Processus de
                    pr&eacute;enregistrement
                </h2>
                <p>
                    De nombreuses entreprises exigent qu&apos;un nouveau
                    fournisseur obtienne une note satisfaisante dans un audit
                    social avant que l&apos;entreprise ne passe toute commande
                    aupr&egrave;s dudit fournisseur. D&apos;ordinaire,
                    l&apos;entreprise offre une formation au fournisseur pour le
                    pr&eacute;parer &agrave; l&apos;audit, ou pr&eacute;voit
                    qu&apos;un fournisseur/agent assure la formation des
                    fournisseurs. Lorsqu&apos;un fournisseur a de bons
                    r&eacute;sultats &agrave; son audit, certaines entreprises
                    enregistrent alors chaque fournisseur dans leur
                    syst&egrave;me d&apos;information sur la conformit&eacute;
                    sociale ; les syst&egrave;mes d&apos;information
                    d&apos;autres entreprises sont sur le Web et permettent aux
                    fournisseurs de s&apos;y inscrire eux-m&ecirc;mes.
                </p>
                <p>
                    Ainsi, Target Corporation* exige que tous les vendeurs qui
                    approvisionnent des produits de marque Target passent par
                    une &eacute;valuation des droits de l&rsquo;homme et de la
                    conformit&eacute; dans le cadre du processus
                    d&rsquo;enregistrement. Si un vendeur propose de
                    s&rsquo;approvisionner aupr&egrave;s d&rsquo;un fournisseur
                    qui a &agrave; son actif des ant&eacute;c&eacute;dents de
                    violations de la conformit&eacute; sociale, Target exige
                    qu&rsquo;un plan d&apos;action corrective soit men&eacute;
                    &agrave; terme pour r&eacute;parer les violations avant le
                    d&eacute;but de la production. Pour plus
                    d&apos;informations, voir la{" "}
                    <a
                        href="https://corporate.target.com/corporate-responsibility/responsible-sourcing/social-compliance/labor-and-human-rights"
                        title="Page Web de Target sur les normes d&rsquo;engagement des vendeurs"
                    >
                        page Web de Target sur les normes d&rsquo;engagement des
                        vendeurs
                    </a>{" "}
                    [en anglais].
                </p>
            </div>
            <p>
                Les entreprises dot&eacute;es de grandes cha&icirc;nes
                d&apos;approvisionnement et/ou de fournisseurs
                &eacute;parpill&eacute;s r&eacute;alisent d&apos;ordinaire des
                audits par &eacute;chantillonnage. Ce qui est courant, par
                exemple, pour les audits des producteurs agricoles. Votre
                &eacute;chantillon devrait &ecirc;tre al&eacute;atoire et
                repr&eacute;sentatif du point de vue statistique.
            </p>
            <p>
                Les audits devraient &ecirc;tre programm&eacute;s aux
                p&eacute;riodes o&ugrave; des violations du code sont les plus
                susceptibles de se produire. Dans l&apos;agriculture, par
                exemple, le travail des enfants est le plus susceptible de se
                produire &agrave; la p&eacute;riode des r&eacute;coltes. Dans
                l&apos;industrie manufacturi&egrave;re, les probl&egrave;mes du
                travail sont les plus susceptibles de se produire lorsque les
                &eacute;tablissements sont au maximum de leur niveau de
                production. Votre &eacute;valuation des risques devrait fournir
                des informations sur lesquelles fonder ces
                d&eacute;terminations.
            </p>
            <img
                id="img-browser"
                src={usDol}
                alt="travail agricole des enfants"
            />
            <p className="small-text">
                &copy;Shelley Stinelli/d&eacute;partement du Travail des
                &Eacute;tats-Unis
            </p>
            <p>
                Des audits de votre cha&icirc;ne d&apos;approvisionnement
                devraient aussi &ecirc;tre programm&eacute;s
                r&eacute;guli&egrave;rement. Toutefois, votre &eacute;quipe
                d&rsquo;audit devrait &eacute;galement &ecirc;tre pr&ecirc;te
                &agrave; r&eacute;agir rapidement si une r&eacute;clamation est
                re&ccedil;ue concernant un site de travail particulier.
            </p>
            <p>
                Certaines entreprises permettent aux fournisseurs de
                r&eacute;aliser leurs propres audits, o&ugrave; ils
                &eacute;valuent leur propre performance &agrave; l&apos;aide des
                outils d&apos;audit et en rendent compte &agrave;
                l&apos;entreprise. D&apos;ordinaire, les entreprises le
                permettent aux fournisseurs qui ont un sch&eacute;ma
                &eacute;tabli d&apos;excellence de leur performance dans les
                audits, et/ou aux fournisseurs situ&eacute;s dans des pays
                o&ugrave; l&apos;&Eacute;tat a &eacute;tabli des pratiques
                d&apos;application efficace des lois sur le travail. Il est
                toutefois recommand&eacute; de se r&eacute;server le droit de
                r&eacute;aliser des audits suppl&eacute;mentaires aupr&egrave;s
                desdits fournisseurs. L&apos;auto-audit a l&apos;avantage de
                renforcer les capacit&eacute;s des fournisseurs, mais ses
                r&eacute;sultats devraient n&eacute;anmoins &ecirc;tre
                contr&ocirc;l&eacute;s par une partie ind&eacute;pendante.
            </p>
        </div>
    );
};

export default fr;
