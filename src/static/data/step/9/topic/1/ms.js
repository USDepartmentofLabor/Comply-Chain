import React from "react";
import { Link } from "react-router-dom";
import StaticData from "../../../../../../components/StaticData";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";

const ms = () => {
    return (
        <StaticData>
            <div>
            <h1>Mengapa Melakukan Kajian Semula yang Bebas?</h1>
                <p>
                    Seperti yang dibincangkan dalam Sistem Pematuhan Sosial Asas, pasukan pematuhan sosial anda mempunyai matlamat 
                    yang telah ditetapkan, objektif dan sasaran bagi sistem anda dan mengakses secara berkala prestasi terhadap 
                    sasaran tersebut. Sebagai tambahan kepada kajian dalaman ini, anda juga perlukan kajian bebas, yang termasuk 
                    pemantauan bebas dan pengesahan bebas berkaitan dengan keberkesanan semua elemen program pematuhan sosial.{" "}
                    <em>Catatan: Kalau dalam </em>
                    <Link to="/steps/7">Step 5, Monitor Compliance</Link>
                    <em>
                    , sebuah syarikat sudah memilih pemantauan bebas/mengaudit, tidak perlu lagi untuk mengulangi langkah ini, 
                    tetapi dinasihatkan untuk menjalankan pengesahan bebas{" "}
                    </em>
                    Kajian dan penilaian oleh pihak luar yang bebas boleh membantu anda mengenal pasti bidang untuk diperbaiki dan 
                    memberi pihak berkepentingan maklumat yang diinginkan mengenai pelaksanaan dan keberkesanan sistem anda.
                </p>
                <ExampleInAction id="sai_model">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                            Contoh dalam Tindakan: Model Kebertanggungjawapan Sosial Antarabangsa (Social Accountability 
                            International Model
                        </strong>
                    </h2>
                    <p>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.sa-intl.org/"
                            title="Social Accountability International (SAI)"
                        >
                            Social Accountability International (SAI)
                        </a>
                        * ialah pertubuhan badan bukan kerajaan yang memberi fokus kepada 
                        usaha hak asasi manusia. Pada 1997, sebagai sebahagian daripada inisiatif pelbagai pihak berkepentingan, 
                        SAI membangunkan{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.sa-intl.org/_data/global/files/SA8000Standard2014(3).pdf"
                            title="Social Accountability (SA8000) Standard"
                        >
                            Social Accountability (SA8000) Standard
                        </a>{" "}
                        SA8000 ialah standard persijilan sosial antarabangsa bagi kilang-kilang dan pertubuhan yang, selepas bertahun-tahun, 
                        telah berubah menjadi kerangka inklusif yang membantu pertubuhan menunjukkan pematuhan sosial yang berkualiti tinggi 
                        dalam rantai bekalan.   Bagi memastikan kebebasan audit yang dilakukan terhadap SA8000, SAI mengasaskan{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.saasaccreditation.org/"
                            title="Social Accountability Accreditation Services (SAAS)"
                        >
                            Social Accountability Accreditation Services (SAAS)
                        </a>{" "}
                        pada 1997. SAAS kemudian menjadi pertubuhan bukan kerajaan yang berasingan pada 2007. SAAS ialah agensi yang memberi 
                        tauliah dan memantau pertubuhan sebagai pengesah pematuhan dengan standard sosial, termasuk SA8000, untuk tempat 
                        kerja yang beretika.
                    </p>
                </ExampleInAction>
            </div>
        </StaticData>
    );
};

export default ms;
