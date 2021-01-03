import React from "react";
import { Link } from "react-router-dom";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";
import StaticData from "../../../../../../components/StaticData";
import usFlag from "../../../../../images/us_flag.png";
import verite from "../../../../../images/verite.png";
import { UsFlag, Verite, VeriteFlagWrapper } from "./shared";
import Accordion from "../../../../../../components/Accordion";


const ms = () => {
    return (
        <StaticData>
            <div>
                <h1>Peralatan Audit</h1>
                <p>
                    Format alat audit berbeza; ada ditulis di atas kertas (kemudian ditaip ke dalam sistem elektronik), dan 
                    ada yang diprogramkan ke dalam alat elektronik mobil. Alat elektronik tidak semestinya lebih canggih 
                    daripada yang ditulis di atas kertas, tetapi ia lebih cekap dan cepat dilaporkan ke anggota pasukan di pejabat.
                </p>
                <p>
                    Peralatan audit adalah set soalan yang disalurkan dari kod tingkah laku; maksudnya ia &ldquo;menterjemahkan&rdquo; 
                    kenyataan dalam kod kepada data khusus yang perlu dikumpulkan untuk menilai pematuhan kepada kod.
                </p>
                <p>
                    Contohnya, berkenaan buruh kanak-kanak, kod tingkah laku mungkin menyatakan:
                </p>
                <ul>
                    <li>
                        Pembekal dilarang mengambil kerja kanak-kanak bawah umur 15 atau umur minimum untuk bekerja seperti yang 
                        terdapat dalam undang-undang tempatan, yang mana yang lebih tinggi.
                    </li>
                </ul>
                <p>
                    Berdasarkan peruntukan kod, alat audit itu kemudian akan memberi panduan kepada pengaudit untuk memeriksa isu seperti: 
                </p>
                <ul>
                    <li>
                        Apakah dokumen untuk membuktikan umur yang diperlukan ketika diambil bekerja? Bagaimanakah dokumen tersebut disahkan? 
                        Di manakah dokumen untuk pengesahan umur disimpan?
                    </li>
                    <li>
                        Sekiranya kanak-kanak bawah umur 15 terdapat di tempat kerja, adakah mereka bekerja sebagai perantis yang sah atau 
                        dalam program latihan? Apakah dokumen disimpan di tempat kerja untuk mengesahkan ini program perantis yang sah atau 
                        program latihan?
                    </li>
                    <li>
                        Adakah mereka membuat &ldquo;kerja ringan&ldquo; seperti yang terdapat dalam undang-undang tempatan atau standard 
                        antarabangsa? Bagaimanakah tempat kerja mendefinisikan dan mendokumenkan &ldquo;kerja ringan&ldquo;?
                    </li>
                    <li>
                        Apakah keadaan kerja bagi semua pekerja bawah umur 18? Apakah tugas-tugas khas yang mereka lakukan? Apakah alat yang 
                        mereka gunakan? Adakah tugas atau alat ini membahayakan?
                    </li>
                    <li>
                        Bagaimanakah tempat kerja membezakan antara tugas yang berbahaya dan tidak berbahaya, dan bagaimanakah tempat kerja 
                        memastikan yang mereka di bawah umur 18 tidak terlibat dalam kerja berbahaya lantas melanggar undang-undang antarabangsa?
                    </li>
                </ul>
                <p>
                    Buruh paksa merupakan pencabulan hak buruh yang amat kompleks dan didapati dalam pelbagai bentuk. ILO &rsquo;s{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.ilo.org/global/topics/forced-labour/publications/WCMS_099626/lang--en/index.htm"
                        title="Combating Forced Labour: A Handbook for Employers and Business, Booklet 4"
                    >
                        <em>
                            Memerangi Buruh Paksa: Buku Panduan untuk Majikan dan Perniagaan, Buku kecil 4
                        </em>
                    </a>
                    <em>, </em>mengandungi senarai pemeriksaan yang berguna untuk pengaudit dan kakitangan yang terlibat dalam pematuhan 
                    bagi mengenal pasti buruh paksa di peringkat pengusaha dan dalam rantai bekalan global. Pada 2016, ILO juga 
                    melancarkan aplikasi mobil,{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.ilo.org/global/publications/WCMS_456961/lang--en/index.htm"
                        title="Checkpoints for Companies: Eliminating and Preventing Forced Labour"
                    >
                        Membasmi dan Menghindari Buruh Paksa: Pusat Pemeriksaan
                    </a>
                    , yang membenarkan syarikat, pengaudit, dan kakitangan pematuhan membentuk senarai pemeriksaan interaktif untuk membasmi 
                    dan menghindari pengambilan buruh paksa dalam operasi perniagaan. Pertanyaan berikut, dipetik dari penerbitan ILO, boleh 
                    membantu pengaudit mengenal pasti bentuk khusus buruh paksa. 
                </p>
                <Accordion id="recruitment-indicator-acc">
               <Accordion.Section id="recruitment-indicator-description">
                  <Accordion.Title>
                    Rajah 1: Penunjuk Buruh Paksa Melalui Amalan Merekrut
                     </Accordion.Title>
                     <Accordion.Panel>
                     <p className="indent-margin">
                      <ol>
                         <li>
                            Ada terdapat pekerja yang lahir atau waris “hamba” atau status terikat?
                         </li>
                         <li>
                            Ada pekerja yang diculik, dikurung semasa proses merekrut, atau dijual ke dalam kerjanya?
                         </li>
                         <li>
                            Ada pekerja yang direkrut melalui hutang, seperti diberi duit pendahuluan atau hutang, di 
                            mana mereka terpaksa bayar balik?
                         </li>
                         <li>
                            Waktu direkrut, adakah pekerja diberitahu yang mereka akan membuat kerja yang lain daripada 
                            kerja yang mereka sekarang?
                         </li>
                         <li>
                            Pada waktu proses merekrut, adakah pekerja yang dijanjikan sesuatu keadaan kerja, terma kontrak penggajian, 
                            tempat tinggal, lokasi kerja, majikan, atau upah/gaji yang berbeza daripada sekarang?
                         </li>
                         <li>
                            Waktu direkrut, adakah pekerja ditawarkan perkahwinan sebagai insentif?
                         </li>
                     </ol>
                 </p>
                 </Accordion.Panel>
             </Accordion.Section>
             {/* </Accordion>
             <Accordion id="duress-indicator-acc"> */}
                <Accordion.Section id="duress-indicator-description">
                   <Accordion.Title>
                    Rajah 2: Penunjuk Buruh Paksa Melalui Kerja dan Kehidupan Dalam Tekanan
                      </Accordion.Title>
                      <Accordion.Panel>
                      <p className="indent-margin">
                       <ol>
                        <li>
                            Ada mana-mana pekerja yang kerja berlebihan masa lebih daripada yang dihadkan di bawah undang-undang?
                      </li>
                      <li>
                        Ada pekerja yang dipaksa bekerja &ldquo;bila dipanggil&ldquo;(siang atau malam)?
                      </li>
                      <li>
                        Adakah majikan mengehadkan pergerakan pekerja atau berkomunikasi dengan orang lain di dalam atau di luar tempat kerja?
                      </li>
                      <li>
                        Sekiranya tempat tinggal disediakan oleh majikan, adakah keadaan tempat tinggal dalam keadaan buruk?
                      </li>
                      <li>
                        Adakah majikan memaksa pekerja melakukan aktiviti haram seperti bekerja di rumahnya atau rumah keluarganya atau mengambil 
                        dadah yang mengakibatkan ketagihan?
                      </li>
                      <li>
                        Adakah majikan mengenakan atau meningkatkan hutang pekerja seperti memalsukan rekod kerjanya, meningkatkan harga 
                        barang-barang yang pekerja dipaksa beli, mengurangkan nilai barang-barang atau perkhidmatan yang dikeluarkan oleh pekerja, 
                        meletakkan kadar faedah yang berlebihan atas pinjaman atau pendahuluan wang kepada pekerja, dan lain-lain?
                      </li>
                      <li>
                        Adakah pekerja bergantung kepada majikan untuk perumahan , makanan, dan keperluan lain?
                      </li>
                      <li>
                        Adakah pekerja bergantung kepada majikan di luar batasan pekerjaan, contohnya, mempunyai perhubungan peribadi, bergantung 
                        kepada majikan untuk mendapatkan pekerjaan bagi ahli keluarga mereka, dll.?
                      </li>
                      </ol>
                  </p>
                  </Accordion.Panel>
              </Accordion.Section>
              {/* </Accordion>
              <Accordion id="impossible-leaving-acc"> */}
                <Accordion.Section id="impossible-leaving-description">
                    <Accordion.Title>
                    Rajah 3: Penunjuk Buruh Paksa yang Mustahil untuk Berhenti 
                    </Accordion.Title>
                    <Accordion.Panel>
                    <p className="indent-margin">
                        <ol>
                        <li>
                            Adakah pekerja merasa mereka tidak bebas untuk berhenti bekerja kerana telah menerima banyak kemudahan daripada majikan?
                        </li>
                        <li>
                            Bolehkah pekerja berhenti bila-bila masa, tanpa didenda (kecuali di bawah peruntukan undang-undang)?
                        </li>
                        <li>
                            Adakah pekerja merasa mereka terpaksa terus bekerja sebab mereka sedang menunggu gaji yang telah dijanjikan?
                        </li>
                        <li>
                            Adakah pekerja bekerja berlebihan masa atau bekerja tanpa henti untuk membayar hutang atau duit pendahuluan kepada 
                            majikan atau perekrut?
                        </li>
                        </ol>
                    </p>
                    </Accordion.Panel>
                </Accordion.Section>
                            {/* </Accordion>

                  <Accordion id="penalties-indicator-acc"> */}
                <Accordion.Section id="penalties-indicator-description">
                    <Accordion.Title>
                    Rajah 4: Penunjuk Denda atau Ancaman 
                    </Accordion.Title>
                    <Accordion.Panel>
                    <p>
                        Sekiranya ada penunjuk yang disenaraikan di atas wujud (mana-mana satu penunjuk memadai; setiap satu 
                        penunjuk dari rajah tidak diperlukan). Pengaudit harus memeriksa sama ada denda atau ancaman digunakan 
                        untuk mengerah pekerja. Kalau ya, keadaan itu mungkin menunjukkan wujudnya buruh paksa:
                    </p>
                    <ol>
                        <li>
                            Adakah majikan (atau perekrut) mengancam untuk mendedahkan pekerja kepada pihak berkuasa (contohnya, pihak imigresen)?
                        </li>
                        <li>
                            Pernahkah majikan (atau perekrut) mengambil dan menyimpan dokumen pengenalan atau dokumen perjalanan milik pekerja? 
                        </li>
                        <li>
                            Adakah majikan mengehadkan peluang pekerja untuk berkomunikasi, seperti merampas telefon bimbit, menjauhi mereka daripada 
                            rakan sekerja, mengunci mereka di dalam tempat kerja atau tempat tinggal mereka, atau sentiasa memantau mereka?
                        </li>
                        <li>
                            Adakah majikan (atau perekrut) melakukan atau mengancam keganasan fizikal atau seksual terhadap pekerja termasuk menghukum 
                            dengan kejam seorang pekerja di hadapan pekerja lain?
                        </li>
                        <li>
                            Adakah majikan menghukum atau mengancam pekerja melalui cara lain, seperti mengurangkan makanan, air dan tidur, atau 
                            mengancam ahli keluarga pekerja? 
                        </li>
                        <li>
                            Adakah majikan (atau perekrut) mengancam untuk menarik balik hak istimewa seperti kemungkinan untuk naik pangkat?
                        </li>
                        <li>
                            Adakah majikan mengancam untuk memburukkan lagi keadaan tempat kerja?
                        </li>
                        <li>
                            Adakah majikan (atau perekrut) mengeksploit kepercayaan agama atau budaya untuk mengancam pekerja?
                        </li>
                        <li>
                            Adakah majikan (atau perekrut) menahan aset pekerja, seperti harta benda peribadi, wang tunai, dll?
                        </li>
                        <li>Adakah majikan menahan gaji pekerja?</li>
                        <li>Adakah majikan mengancam untuk membuang kerja/memberhentikan pekerja? </li>
                        <li>
                            Adakah majikan mengancam untuk memberi lebih kerja sekiranya pekerja tidak bekerjasama?
                        </li>
                        <li>Adakah majikan mengancam untuk mendenda dari segi kewangan?</li>
                        <li>
                            Adakah majikan (atau perekrut) mengancam untuk menahan peluang pekerjaan pada masa depan, mengenakan denda kewangan, 
                            melarang pekerja daripada terlibat dalam aktiviti sosial atau komuniti, atau memeras ugut untuk memaksa pekerja?
                        </li>
                        </ol>
                    </Accordion.Panel>
                </Accordion.Section>
            </Accordion>
                <p>
                    Banyak alat audit syarikat adalah hak mereka, jadi, oleh itu sangat sukar untuk mendapatkan contoh sebagai panduan untuk 
                    membentuk alat audit bagi anda. {" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://responsiblesourcingtool.org/"
                        title="Responsible Sourcing Tool"
                    >
                        Responsible Sourcing Tool
                    </a>{" "}
                    (RST) termasuk Penanda Aras Merekrut dan Penggajian untuk menunjukkan titik data yang boleh diukur dan diambil tindakan 
                    serta amalan baik digariskan dalam Contoh Peruntukan Kod Tingkah Laku, yang dirujuk dalam {" "}
                    <Link to="/steps/5">Step 3, Develop a Code of Conduct</Link>
                    . Penanda aras ini, yang merangkumi pelbagai bidang berkaitan dengan buruh paksa dan pemerdagangan manusia, termasuk yuran 
                    merekrut, kontrak penggajian, dokumen untuk mengekalkan pekerja, kebebasan bergerak, boleh digunakan sebagai asas bagi membentuk 
                    alat audit dan untuk menubuhkan dan memantau penunjuk prestasi utama dalam menilai prestasi pembekal dan ejen buruh. 
                </p>
                <ExampleInAction id="rst1a">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb" /> Contoh dalam Tindakan: Alat Mencari Sumber Secara Bertanggungjawab 1A
                    </h2>
                    <VeriteFlagWrapper>
                        <UsFlag src={usFlag} alt="US Flag" />
                        <Verite src={verite} alt="Verite sign" />
                    </VeriteFlagWrapper>
                    <p>
                        <strong>
                            MELINDUNGI DARIPADA PEMERDAGANGAN MANUSIA{" "}
                        </strong>
                    </p>
                    <p>
                        <strong>
                        Merekrut dan Penanda Aras Penggajian 
                        </strong>
                    </p>
                                  <Accordion id="human-traffic-acc">
                                       <Accordion.Section id="human-traffic-description">
                                          <Accordion.Title>
                                          HUMAN TRAFFICKING
                                             </Accordion.Title>
                                             <Accordion.Panel>
                                             <p>
                                                 Company policies and practices express a clear
                                                 prohibition of, forced, compulsory, bonded, or
                                                 indentured labor that applies to all entities in its
                                                 supply chain, including those involved in the
                                                 recruitment, selection, and hiring of workers. Company
                                                 policies and practices also express a clear prohibition
                                                 of sex trafficking and procurement of commercial sex.
                                             </p>
                                             <ul>
                                                 <li>
                                                     Clear and transparent human resource practices on
                                                     recruitment, contracts, wages and working hours are
                                                     adopted by the company and its subcontractors to
                                                     minimize the risk of human trafficking.
                                                 </li>
                                                 <li>
                                                     The company, and suppliers, subcontractors or agents
                                                     acting on its behalf, comply with all relevant local
                                                     laws and regulations, including those concerning the
                                                     prohibition of forced labor and human trafficking in
                                                     each jurisdiction in which they operate.
                                                 </li>
                                                 <li>
                                                     The workplace is free of any form of, forced,
                                                     compulsory, bonded, or indentured labor, or
                                                     involuntary prison labor.
                                                 </li>
                                                 <li>
                                                     Workers enter into employment freely and employment
                                                     terms and conditions are agreed to voluntarily,
                                                     without deception or threat of penalty.
                                                 </li>
                                                 <li>All work is voluntary.</li>
                                                 <li>
                                                     Workers have the freedom to terminate their
                                                     employment at any time without penalty, given notice
                                                     of reasonable length (not to exceed 30 days).
                                                 </li>
                                             </ul>
                                         </Accordion.Panel>
                                     </Accordion.Section>
                                     {/* </Accordion>
                                     <Accordion id="recruit-fee-acc"> */}
                                       <Accordion.Section id="recruit-fee-description">
                                          <Accordion.Title>
                                          Penanda Aras Perekrutan dan Penggajian
                                             </Accordion.Title>
                                             <Accordion.Panel>
                                                <p>
                                                   The company has a written policy declaring that workers
                                                   shall not pay any amount to secure a job with the
                                                   company or with a supplier or subcontractor.
                                               </p>
                                               <ul>
                                                   <li>
                                                       The job advertisements from the company and its
                                                       subcontractors and suppliers include the statement
                                                       that no fees shall be charged at any phase in the
                                                       recruitment and hiring process.
                                                   </li>
                                                   <li>
                                                       The employer covers all recruitment and processing
                                                       fees, costs, and expenses, including those
                                                       associated with securing identity cards, medical
                                                       certificates and examinations, skills testing, and
                                                       travel from the worker&rsquo;s home to the location
                                                       of employment.
                                                   </li>
                                                   <li>
                                                       The employer fully covers the cost of return
                                                       transportation to the worker&rsquo;s country of
                                                       origin upon completion of their employment contract.
                                                   </li>
                                                   <li>
                                                       The company has mechanisms to continuously monitor
                                                       and ensure that workers are not charged any amount
                                                       to secure a job.
                                                   </li>
                                                   <li>
                                                       The company only engages recruiters, agents, and
                                                       sub-agents who do not charge fees to jobseekers.
                                                   </li>
                                                   <li>
                                                       The company, or subcontractors acting on its behalf,
                                                       has means of informing jobseekers at the point of
                                                       recruitment that workers do not pay fees or costs
                                                       for any services directly related to obtaining
                                                       employment.
                                                   </li>
                                                   <li>
                                                       The company or receiving country recruiter has a
                                                       verification process to ensure that workers are not
                                                       charged any fees.
                                                   </li>
                                                   <li>
                                                       Workers found to have been charged fees are repaid,
                                                       and contracts with recruiters found to have charged
                                                       fees are terminated.
                                                   </li>
                                                 </ul>
                                         </Accordion.Panel>
                                     </Accordion.Section>
                                     {/* </Accordion>
                    <Accordion id="emp-contract-acc"> */}
                                              <Accordion.Section id="emp-contract-description">
                                                 <Accordion.Title>
                                                 CONTRACTS OF EMPLOYMENT
                                                    </Accordion.Title>
                                                    <Accordion.Panel>
                                                    <ul>
                                                    <li>
                                                        All candidates are clearly informed of the terms and
                                                        conditions of employment, and successful candidates
                                                        are provided a copy of the contract at least five
                                                        days prior to deployment.
                                                    </li>
                                                    <li>
                                                        The company explains the terms and conditions of the
                                                        contract in the workers&rsquo; native language, and
                                                        has means to verify that the terms are clearly
                                                        understood and fully agreed to by the workers.
                                                    </li>
                                                    <li>
                                                        Employment contracts clearly specify the rights and
                                                        responsibilities of workers with regard to wages,
                                                        benefits, hours of work, including regular hours and
                                                        overtime requirements, days off and annual leave,
                                                        location of the work, living conditions, housing
                                                        arrangements, work related hazards, and disciplinary
                                                        and other procedures that can lead to termination,
                                                        as well as appeal procedures and grievance
                                                        mechanisms consistent with applicable law.
                                                    </li>
                                                    <li>
                                                        The details of working conditions described at the
                                                        point of recruitment are consistent with the details
                                                        contained in the employment contract at the time of
                                                        hiring, and with actual job conditions and
                                                        responsibilities.
                                                    </li>
                                                    <li>
                                                        Company policy prohibits the substitution of
                                                        original contract provisions with those that are
                                                        less favorable to the worker. Any amendments made to
                                                        improve conditions are made with the knowledge and
                                                        the informed, written consent of the worker.
                                                    </li>
                                                    <li>
                                                        Changes to working conditions are made with the
                                                        knowledge and consent of the worker. Consent is
                                                        obtained voluntarily and without the threat of
                                                        penalty. No changes are made that in any way
                                                        diminish the worker&rsquo;s originally anticipated
                                                        wages, benefits, or other conditions of work; or
                                                        place the worker in a position of physical or mental
                                                        risk or peril, or other form of disadvantage or
                                                        vulnerability.
                                                    </li>
                                                    <li>
                                                        Employment contracts clearly stipulate the rights
                                                        and responsibilities of each party regarding the
                                                        termination of employment.
                                                    </li>
                                                    <li>
                                                        Employment contracts clearly specify the
                                                        circumstances in which a worker can terminate his or
                                                        her contract without penalty, given reasonable
                                                        notice, and in accordance with national law. The
                                                        required notice period for workers to terminate
                                                        their contracts early shall not exceed one month or
                                                        as specified by local law, whichever is shortest.
                                                    </li>
                                                    <li>
                                                        The notice period shall be waived in situations
                                                        where the worker has suffered harassment or abuse,
                                                        or is a victim of trafficking in persons. In such
                                                        cases the employer shall also be responsible for
                                                        paying the cost of return transportation for the
                                                        affected worker.
                                                    </li>
                                                </ul>
                                                </Accordion.Panel>
                                            </Accordion.Section>
                                            {/* </Accordion>
                    <Accordion id="doc-retention-acc"> */}
                                              <Accordion.Section id="doc-retention-description">
                                                 <Accordion.Title>
                                                 DOCUMENT RETENTION
                                                    </Accordion.Title>
                                                    <Accordion.Panel>
                                                        <ul>
                                                        <li>
                                                            Applicants&rsquo; or workers&rsquo; identity or
                                                            immigration documents, including passports,
                                                            residency or work permits, or other personal
                                                            documents, such as bank books or automatic teller
                                                            machine (ATM) cards, are not destroyed, concealed,
                                                            confiscated, or otherwise denied access by the
                                                            worker, for any reason.
                                                        </li>
                                                        <li>
                                                            In the event that personal documents are held by the
                                                            employer or subcontractor due to legal requirements,
                                                            these are immediately returned to the worker upon
                                                            demand and without any preconditions. In such
                                                            circumstances, the employer or subcontractor:
                                                            <ul>
                                                                <li>
                                                                    Provides workers with an exact copy of
                                                                    personal documentation when not in their
                                                                    possession;
                                                                </li>
                                                                <li>
                                                                    Develops written policies and procedures to
                                                                    prevent abuse;
                                                                </li>
                                                                <li>
                                                                    Nominates a responsible person to ensure
                                                                    workers have unhindered access to their
                                                                    documents upon demand; and
                                                                </li>
                                                                <li>Notifies workers of these procedures.</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            Lengthy or otherwise burdensome prerequisites for
                                                            accessing one&rsquo;s passport or other personal
                                                            documents, such as written requests, monetary
                                                            deposits or waiting periods, are strictly
                                                            prohibited.
                                                        </li>
                                                        <li>
                                                            Workers are provided with individual locked, secure
                                                            storage space for personal documents and valuables
                                                            at both their employer-provided accommodation and
                                                            workplace.
                                                        </li>
                                                    </ul>
                                                </Accordion.Panel>
                                            </Accordion.Section>
                                            {/* </Accordion>
                    <Accordion id="deposits-acc"> */}
                                              <Accordion.Section id="deposits-description">
                                                 <Accordion.Title>
                                                 DEPOSITS
                                                    </Accordion.Title>
                                                    <Accordion.Panel>
                                                        <ul>
                                                        <li>
                                                            Workers are not required to post a bond at the time
                                                            of recruitment or at any other time during the
                                                            employment relationship.
                                                        </li>
                                                        <li>
                                                            The company policies strictly prohibit the
                                                            collection of monetary deposits or security
                                                            payments.
                                                        </li>
                                                        <li>
                                                            The company, or subcontractor acting on its behalf,
                                                            withholds portions of workers&rsquo; pay only where
                                                            it is legally required.
                                                        </li>
                                                        <li>
                                                            In those cases where migrant workers have opted to
                                                            participate in voluntary savings schemes facilitated
                                                            by their employer, such workers have unhindered
                                                            access to and full control over all savings and
                                                            monies owed.
                                                        </li>
                                                    </ul>
                                                </Accordion.Panel>
                                            </Accordion.Section>
                                            {/* </Accordion>
                    <Accordion id="humane-trtmnt-acc"> */}
                                              <Accordion.Section id="humane-trtmnt-description">
                                                 <Accordion.Title>
                                                 HUMANE TREATMENT
                                                    </Accordion.Title>
                                                    <Accordion.Panel>
                                                        <ul>
                                                            <li>
                                                                Company policies and procedures prohibit sanctions
                                                                that impose work or wage deductions, or reductions
                                                                in benefits as a means to discipline workers.
                                                            </li>
                                                            <li>
                                                                No form of compulsory labor is imposed on any
                                                                worker.
                                                            </li>
                                                            <li>
                                                                The policy of the company, or subcontractor acting
                                                                on its behalf, strictly prohibits the use or threat
                                                                of physical or sexual violence, harassment and
                                                                intimidation, and senior management has expressed
                                                                clear commitment to this policy.
                                                            </li>
                                                            <li>
                                                                Effective measures are in place to implement,
                                                                monitor, and ensure company-wide compliance with
                                                                this policy.
                                                            </li>
                                                            <li>
                                                                There is no evidence of complaints, grievances, or
                                                                actions taken against the company, its managers or
                                                                supervisors, or its subcontractors, suppliers and
                                                                agents, with respect to violence, intimidation, or
                                                                harassment in the workplace. In cases where a
                                                                complaint or grievance has been raised, evidence
                                                                should show that swift and transparent action was
                                                                taken to address it.
                                                            </li>
                                                        </ul>
                                                </Accordion.Panel>
                                            </Accordion.Section>
                                            {/* </Accordion>

                    <Accordion id="workplace-eq-acc"> */}
                                              <Accordion.Section id="workplace-eq-description">
                                                 <Accordion.Title>
                                                 WORKPLACE EQUALITY
                                                    </Accordion.Title>
                                                    <Accordion.Panel>
                                                        <ul>
                                                        <li>
                                                            All workers, regardless of their national origin,
                                                            ethnicity, race, or legal status, are treated
                                                            equally in the workplace.
                                                        </li>
                                                        <li>
                                                            Migrant workers are treated no less favorably than
                                                            country nationals with respect to:
                                                            <ul>
                                                                <li>
                                                                    Remuneration, hours of work, overtime
                                                                    arrangements, and holidays with pay;
                                                                </li>
                                                                <li>Access to training;</li>
                                                                <li>
                                                                    Eligibility for promotion and wage
                                                                    increases;
                                                                </li>
                                                                <li>
                                                                    Membership in labor unions or other worker
                                                                    organizations;
                                                                </li>
                                                                <li>Accommodation; and</li>
                                                                <li>
                                                                    Benefits and social insurance, including
                                                                    social security, maternity and sick leave,
                                                                    disability and employment injury insurance.
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            The company, or subcontractors acting on its behalf,
                                                            explicitly prohibits the abuse of vulnerability of
                                                            migrant workers, including the threat of
                                                            denunciation to authorities as a means of coercion.
                                                        </li>
                                                    </ul>
                                                </Accordion.Panel>
                                            </Accordion.Section>
                                            {/* </Accordion>

                    <Accordion id="wages-benefits-acc"> */}
                                              <Accordion.Section id="wages-benefits-description">
                                                 <Accordion.Title>
                                                 WAGES AND BENEFITS
                                                    </Accordion.Title>
                                                    <Accordion.Panel>
                                                        <ul>
                                                        <li>
                                                            The freedom of workers to dispose of their wages as
                                                            they choose is not limited in any way.
                                                        </li>
                                                        <li>
                                                            Wages specified in employment contracts meet legal
                                                            minimum wage. In the absence of a legal minimum
                                                            wage, wages are at least the industry prevailing
                                                            wage for similar work in the immediate area in the
                                                            country of employment, and wage calculations are
                                                            equitable and objective.
                                                        </li>
                                                        <li>
                                                            Wage payments are not deferred, delayed, or withheld
                                                            as a means of binding workers to employment.
                                                        </li>
                                                        <li>
                                                            Non-cash or &ldquo;in-kind&rdquo; payments in lieu
                                                            of wages are not used.
                                                        </li>
                                                        <li>
                                                            Wage rates and payments are calculated with full
                                                            transparency.
                                                        </li>
                                                        <li>
                                                            The calculation and payment of wages, including
                                                            legal wage deductions, are clearly explained to and
                                                            understood by all workers.
                                                        </li>
                                                        <li>
                                                            No unlawful or unauthorized deductions are made from
                                                            workers&rsquo; wages. Any deductions from wages are
                                                            clearly described in the employment contract and
                                                            undertaken with written worker consent.
                                                        </li>
                                                        <li>
                                                            Wage deductions levied for tardiness or absence are
                                                            not excessive and do not exceed the time missed on
                                                            the job, for example 10 minutes worth of pay for 10
                                                            minutes tardiness.
                                                        </li>
                                                        <li>
                                                            Wage advances or loans provided to workers, along
                                                            with related interest rates, comply with the law, at
                                                            a minimum. Additionally:
                                                            <ul>
                                                                <li>
                                                                    Interest rates and repayment terms are fair.
                                                                    Payments do not exceed 10 percent of a
                                                                    worker&rsquo;s monthly wage, such that loans
                                                                    can be repaid in a reasonable amount of time
                                                                    not exceeding six months;
                                                                </li>
                                                                <li>
                                                                    The calculation of interest rates for loans
                                                                    and advances, and wage deductions made for
                                                                    their repayment are made with complete
                                                                    transparency to the worker;
                                                                </li>
                                                                <li>
                                                                    Interest rates do not exceed the local
                                                                    prevailing local market bank rates;
                                                                </li>
                                                                <li>
                                                                    The terms of wage advances and their
                                                                    repayment are agreed to by both parties in
                                                                    advance and in written form.
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            Jobseekers, applicants or workers are not required
                                                            to participate in any form of forced or mandatory
                                                            savings in order to recoup costs associated with
                                                            recruitment or other services.
                                                        </li>
                                                        <li>
                                                            If migrant workers pay for employer provided or
                                                            arranged housing and food, such charges:
                                                            <ul>
                                                                <li>
                                                                    Do not exceed market rates or the rate paid
                                                                    by local workers;
                                                                </li>
                                                                <li>
                                                                    Do not aid companies or subcontractors in
                                                                    earning a profit at workers&rsquo; expense;
                                                                    and
                                                                </li>
                                                                <li>
                                                                    Are not part of efforts to reclaim placement
                                                                    fees or other fees paid by employers for
                                                                    recruiting workers.
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </Accordion.Panel>
                                            </Accordion.Section>
                                            {/* </Accordion>

                    <Accordion id="working-hours-acc"> */}
                                              <Accordion.Section id="working-hours-description">
                                                 <Accordion.Title>
                                                 WORKING HOURS
                                                    </Accordion.Title>
                                                    <Accordion.Panel>
                                                         <ul>
                                                            <li>
                                                                Workers are not forced to work more than the number
                                                                of hours allowed by national law, or, where the law
                                                                is silent, working hours do not exceed eight per day
                                                                and 48 per week, and total working hours including
                                                                overtime does not exceed 60 hours in a week.
                                                            </li>
                                                            <li>
                                                                Effective workplace and company-wide measures are
                                                                adopted to ensure full implementation and compliance
                                                                with this policy, including continuous monitoring of
                                                                hours worked to identify workers at risk of
                                                                exceeding the limit, coordination of production and
                                                                manpower planning, etc.
                                                            </li>
                                                            <li>
                                                                All overtime work is purely voluntary, unless
                                                                specifically stated otherwise in a legally
                                                                recognized collective bargaining agreement.
                                                            </li>
                                                            <li>
                                                                Workers track their own working hours using an
                                                                electronic or other objective, verifiable
                                                                timekeeping system.
                                                            </li>
                                                            <li>
                                                                Workers are free to refuse overtime work without
                                                                threat or fear of punishment or reprisal.
                                                            </li>
                                                            <li>
                                                                For those that agree to work overtime, a system is
                                                                in place to obtain their written consent at the time
                                                                of the request.
                                                            </li>
                                                            <li>
                                                                In cases where remuneration is based on productivity
                                                                targets, for example piece rate, workers are not
                                                                forced to work more overtime hours than allowed by
                                                                national law in order to achieve their production
                                                                quota.
                                                            </li>
                                                        </ul>
                                                </Accordion.Panel>
                                            </Accordion.Section>
                                            {/* </Accordion>

                    <Accordion id="freedom-acc"> */}
                                              <Accordion.Section id="freedom-description">
                                                 <Accordion.Title>
                                                 FREEDOM OF MOVEMENT AND PERSONAL FREEDOM
                                                    </Accordion.Title>
                                                    <Accordion.Panel>
                                                       <ul>
                                                           <li>
                                                               Workers enjoy reasonable freedom of movement within
                                                               their work and living environments. Any legitimate
                                                               constraints on off premises movement (for example,
                                                               for valid personal safety or security concerns) are
                                                               specified prior to the signing of the employment
                                                               contract.
                                                           </li>
                                                           <li>
                                                               Workers have unrestricted access to basic
                                                               necessities (drinking water, toilets) during both
                                                               work and non-work hours.
                                                           </li>
                                                           <li>
                                                               The presence of security personnel or other security
                                                               measures in the workplace or employer or
                                                               recruiter-provided or arranged residences are not
                                                               used as a means to restrict worker freedom of
                                                               movement.
                                                           </li>
                                                           <li>
                                                               No other coercive means are used to restrict migrant
                                                               workers&rsquo; freedom of movement or personal
                                                               freedom, including confiscation of personal
                                                               documents, levying of financial penalties or
                                                               security deposits, or use of deception in wage
                                                               payment and deductions.
                                                           </li>
                                                           <li>
                                                               Workers are not required to live in employer- or
                                                               recruiter-operated residences as a condition of
                                                               employment, unless required by applicable law.
                                                           </li>
                                                           <li>
                                                               Migrant workers are free to return to their home
                                                               country during paid leave, without any penalty, or
                                                               threat of termination.
                                                           </li>
                                                       </ul>
                                                </Accordion.Panel>
                                            </Accordion.Section>
                                            {/* </Accordion>

                    <Accordion id="grievance-acc"> */}
                                              <Accordion.Section id="grievance-description">
                                                 <Accordion.Title>
                                                 GRIEVANCE PROCEDURES
                                                    </Accordion.Title>
                                                    <Accordion.Panel>
                                                       <ul>
                                                           <li>
                                                               Supplier and recruiter policy and practice reveals a
                                                               functioning and effective grievance procedure
                                                               available to workers in their native language.
                                                           </li>
                                                           <li>
                                                               Effective measures are in place to ensure that
                                                               migrant workers know how to use this procedure and
                                                               feel safe and free from potential retaliation if
                                                               doing so.
                                                           </li>
                                                           <li>
                                                               Where grievances are raised, effective and
                                                               appropriate procedures are in place to ensure a
                                                               rapid and mutually agreed settlement.
                                                           </li>
                                                           <li>
                                                               Resolution of workplace grievances are regularly
                                                               reported back to all workers.
                                                           </li>
                                                           <li>
                                                               Results of worker surveys and interviews confirm
                                                               that workers both understand the means available to
                                                               them to report grievances and that they trust the
                                                               process to fairly address their issues.
                                                           </li>
                                                           <li>
                                                               An effective appeals process is in place to
                                                               impartially evaluate any disputed grievance
                                                               resolution.
                                                           </li>
                                                       </ul>
                                                </Accordion.Panel>
                                            </Accordion.Section>
                                            {/* </Accordion>

                    <Accordion id="private-emp-acc"> */}
                                              <Accordion.Section id="private-emp-description">
                                                 <Accordion.Title>
                                                 PRIVATE EMPLOYMENT AGENCIES AND LABOR RECRUITERS
                                                    </Accordion.Title>
                                                    <Accordion.Panel>
                                                       <ul>
                                                       <li>
                                                           The company and its suppliers hire workers directly
                                                           whenever possible.
                                                       </li>
                                                       <li>
                                                           When the recruitment, selection, and hiring of
                                                           workers is undertaken by a private employment agency
                                                           or other third-party, suppliers shall have the
                                                           responsibility to ensure that the agencies operate
                                                           legally, are certified or licensed by the competent
                                                           authority, use only employees trained on applicable
                                                           Code and legal requirements, and do not charge
                                                           recruitment fees or engage in fraudulent behavior
                                                           that places workers at risk of trafficking for labor
                                                           exploitation.
                                                       </li>
                                                       <li>
                                                           The company signs a formal contract with the
                                                           subcontracted agency and performs regular due
                                                           diligence on the agency and its partners involved in
                                                           the hiring and placement of workers.
                                                       </li>
                                                       <li>
                                                           Effective measures are established by the company to
                                                           ensure the legal compliance of sub-contractors in
                                                           each jurisdiction in which they operate.
                                                       </li>
                                                       <li>
                                                           The subcontracted agency has an up-to-date license
                                                           or permit to operate in all countries of operation,
                                                           and any partners or agents working on its behalf
                                                           also have up-to-date permits or licenses.
                                                       </li>
                                                       <li>
                                                           The subcontracted agency has not been cited,
                                                           suspended, or otherwise sanctioned for
                                                           non-compliance with any laws in any country of
                                                           operation; or, where a citation for non-compliance
                                                           exists, the agency can demonstrate that it has
                                                           rectified the non-compliance.
                                                       </li>
                                                       <li>
                                                           The company has mechanisms to monitor the
                                                           performance of agents and recruiters to ensure that
                                                           no deception, fraud and/or coercion in the
                                                           recruitment, placement, transport or management of
                                                           migrant workers take place.
                                                       </li>
                                                       <li>
                                                           The company, or subcontractors acting on its behalf,
                                                           provides jobseekers with accurate details of working
                                                           conditions at the time of recruitment, including the
                                                           nature of work, wages, benefits and duration of
                                                           contract.
                                                       </li>
                                                       <li>
                                                           Details of working and employment conditions are
                                                           communicated to jobseekers in a language they
                                                           understand.
                                                       </li>
                                                       <li>
                                                           False promises are not made to applicants or workers
                                                           regarding employment conditions, job locations,
                                                           employment or contract duration, or anticipated
                                                           earnings.
                                                       </li>
                                                       <li>
                                                           The subcontracted agency has an implementing
                                                           structure, an accountable officer, and clear
                                                           procedures to ensure that all policies are compliant
                                                           with all relevant legislation and regulations. This
                                                           includes a current registry of laws for all
                                                           countries of operation; and a mechanism that ensures
                                                           the company is regularly informed of new
                                                           legislation/regulations or changes in
                                                           legislation/regulations.
                                                       </li>
                                                       <li>
                                                           The subcontracted agency has a code of conduct that
                                                           prohibits human trafficking and sets out protective
                                                           measures for workers. The code covers principles
                                                           elaborated in relevant ILO Conventions and the Code
                                                           of Conduct of the International Confederation of
                                                           Private Employment Agencies (CIETT), and applies to
                                                           all parties in the chain of recruitment. The code is
                                                           supported by an institutional structure that ensures
                                                           its effective implementation.
                                                       </li>
                                                       <li>
                                                           The subcontracted agency has established a mechanism
                                                           for confidential reporting of noncompliance, a
                                                           grievance mechanism, procedures of investigation and
                                                           reporting on grievances, and protection for
                                                           whistleblowers.
                                                       </li>
                                                       <li>
                                                           The subcontracted agency has established effective
                                                           remediation procedures in case of verified reports
                                                           of noncompliance, including mechanisms to ensure the
                                                           reimbursement of workers for any recruitment fees
                                                           paid.
                                                       </li>
                                                       <li>
                                                           The company, or subcontractors acting on its behalf,
                                                           does not use any means to restrict migrant
                                                           workers&rsquo; freedom to terminate employment, for
                                                           example by levying excessive recruitment fees,
                                                           requiring deposits, or withholding personal
                                                           documentation.
                                                       </li>
                                                   </ul>
                                                </Accordion.Panel>
                                            </Accordion.Section>
                                            {/* </Accordion>
                    <Accordion id="emp-awareness-acc"> */}
                                              <Accordion.Section id="emp-awareness-description">
                                                 <Accordion.Title>
                                                 EMPLOYEE AWARENESS AND TRAINING
                                                    </Accordion.Title>
                                                    <Accordion.Panel>
                                                        <ul>
                                                        <li>
                                                            All written information and training is provided in
                                                            the native language of the workers.
                                                        </li>
                                                        <li>
                                                            Workers are made aware of their rights and
                                                            responsibilities, both verbally and in writing, at
                                                            the time of hire including the provisions of this
                                                            Code and all applicable laws and regulations of
                                                            their home country, the country where the work is
                                                            performed, and of any country and jurisdiction
                                                            contracting the work.
                                                        </li>
                                                        <li>
                                                            Pre-departure orientation is conducted to review
                                                            contractual obligations, terms and conditions of
                                                            work and other matters including but not limited to
                                                            living conditions, company policies, and the
                                                            grievance mechanisms in place for workers.
                                                        </li>
                                                        <li>
                                                            Workers are trained upon arrival in the receiving
                                                            country on the company&rsquo;s workplace rules and
                                                            procedures, the grievance process, the housing
                                                            arrangements (if provided or arranged by the
                                                            company), and the conditions of work, including any
                                                            health and safety hazards and the precautions needed
                                                            to ensure personal safety.
                                                        </li>
                                                        <li>
                                                            The company evaluates the effectiveness of its
                                                            training and awareness efforts by measuring employee
                                                            knowledge upon completion of training and
                                                            periodically thereafter using surveys, interviews
                                                            and other means.
                                                        </li>
                                                    </ul>
                                                </Accordion.Panel>
                                            </Accordion.Section>
                                            </Accordion>
                                            <p>
                <strong>Sumber: Alat Mencari Sumber Secara Bertanggungjawab 1A, </strong>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.responsiblesourcingtool.org/recruitmentandemployment"
                    title="Sample Benchmarks of Good Practice in Recruitment and Employment"
                >
                    <strong>
                    Recruitment and Employment Benchmarks
                    </strong>
                </a>
                .
            </p>
            <p>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://responsiblesourcingtool.org/"
                    title="ResponsibleSourcingTool.org"
                >
                    ResponsibleSourcingTool.org
                </a>{" "}
                dibentuk dengan kerjasama di antara Jabatan Negara AS,{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.verite.org/"
                    title="Verit&eacute;"
                >
                    <span lang="fr">Verit&eacute;</span>
                </a>
                ,{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://madeinafreeworld.com/"
                    title="Made in a Free World"
                >
                    Made in a Free World
                </a>
                , dan {" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aspeninstitute.org/"
                    title="Institut Aspen"
                >
                    Institut Aspen
                </a>
                . Isi kandungan RST disediakan oleh y{" "}
                <span lang="fr">Verit&eacute;</span>, sebuah pertubuhan hak buruh dengan kepakaran dalam pematuhan rantai bekalan, dengan 
                pembiayaan dari Pejabat untuk Memantau dan Memerangi Pemerdagangan Manusia Jabatan Negara AS di bawah perjanjian kerjasama 
                S-SJTIP-13-CA-1029.  Perkembangan RST dibantu oleh maklumat daripada pakar-pakar dari beberapa agensi kerajaan AS, termasuk 
                Jabatan Negara AS dan Jabatan Buruh, dan pihak berkepentingan lain termasuk mangsa pemerdagangan, pemimpin korporat dan NGO, 
                dan para pegawai pemerolehan dan  kontraktor kerajaan.
            </p>
        </ExampleInAction>
                
                <p>
                    Alat audit yang baik lebih daripada cuma “senarai semak” sahaja. Alat yang baik membenarkan rakaman maklumat bagi 
                    pengaudit yang merakam secara senyap, melalui pemerhatian keadaan tempat kerja dan suasananya, gerak geri orang 
                    yang di temuduga dan petanda lain. Pengaudit harus mengkaji terlebih dahulu kelemahan yang dialami pekerja di tempat 
                    kerja, dan patut prihatin kepada tanda-tanda yang menunjukkan pekerja tertekan atau dipaksa. Alat audit harus membenarkan 
                    rakaman maklumat yang tidak secara langsung berkaitan dengan soalan yang terdapat dalam alat tersebut, tetapi yang 
                    pengaudit masih merasa penting dan relevan. 

                </p>
                <p>
                    Syarikat perniagaan semakin memerlukan sub-kontraktor dan pembekal untuk melakukan penilaian ke atas diri sendiri 
                    untuk menunjukkan risiko bahawa ada kemungkinan terdapat buruh paksa dan pemerdagangan manusia dalam rantai bekalan. 
                    Alat Mencari Sumber Secara Bertanggungjawab{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://responsiblesourcingtool.org/supplierselfassessment"
                        title="Sample Supplier/Subcontractor Self-Assessment Tool"
                    >
                        Pembekal Contoh/Alat Penilaian Sendiri untuk Subkontraktor
                    </a>{" "}
                    dibentuk untuk membantu pembekal dan sub-kontraktor memastikan sama ada aktiviti mereka selari dengan kod tingkah laku 
                    syarikat atau kontraktor, dan juga menunjukkan potensi risiko pemerdagangan manusia termasuk cara mereka merekrut, memilih, 
                    dan mengambil pekerja, cara mereka bekerja dengan broker buruh, dan cara pekerja migran diurus. Alat ini boleh digunakan untuk 
                    pelbagai kegunaan, sebagai alat menapis pembekal, membentuk rancangan tindakan kolektif, atau menubuhkan penunjuk prestasi utama 
                    untuk mengesan prestasi tanggungjawab sosial yang sedang berlangsung.
                </p>
                <p>
                    Satu lagi alat yang penting yang boleh digunakan oleh mana-mana pertubuhan atau pihak bebas ketiga untuk mengesahkan skop dan 
                    keberkesanan syarikat dalam usaha anti pemerdagangan manusia yang dijalankan oleh <span lang="fr">Verit&eacute;&rsquo;s</span>
                    {" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://responsiblesourcingtool.org/download/reports/Verite_BusinessAuthenticationCriteria_r1.pdf"
                        title="Anti-Human Trafficking Business Authentication Criteria"
                    >
                        Kriteria Pengesahan Perniagaan Anti-Pemerdagangan Manusia
                    </a>
                    . Alat ini memberi penilai kriteria untuk mengesahkan prestasi di peringkat syarikat selari dengan usaha anti-pemerdagangan manusia, 
                    termasuk dasar komitmen, lembaga dan eksekutif, struktur organisasi, menilai dan mengawal risiko, dan jangkaan prestasi. Ia 
                    menyediakan amalan utama bagi kriteria, dan juga bukti yang diperlukan untuk pengesahan. Alat ini memberi panduan kepada penilai 
                    untuk mengesahkan pematuhan di peringkat setempat dalam usaha ini, termasuk menentukan keperluan minimum.
                </p>
            </div>
        </StaticData>
    );
};

export default ms;
