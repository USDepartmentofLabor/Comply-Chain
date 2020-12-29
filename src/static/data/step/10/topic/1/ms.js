import React from "react";
import StaticData from "../../../../../../components/StaticData";
import OwnWords from "../../../../../../components/OwnWords";

const ms = () => {
    return (
        <StaticData>
            <div>
                <h1>Bentuk Laporan Awam</h1>
                <p>
                    Laporan awam syarikat mengenai program pematuhan sosial, termasuk mengaudit dan proses pengesahan dan elemen 
                    lain dalam program yang dibincangkan dalam seksyen sebelum ini, mungkin laporan persendirian atau sebahagian 
                    daripada kelestarian luas atau laporan tanggungjawab sosial korporat (CSR). Ia mungkin diterbitkan dalam bentuk 
                    buku dan/atau dalam laman web syarikat; ada syarikat yang menerbitkan kedua-dua laporan tahunan atau laporan 
                    biasa yang dibukukan dan kemas kini dalam talian.
                </p>
                <p>
                    Laporan patut termasuk komunikasi berkala dengan pihak berkepentingan mengenai isu yang penting yang timbul 
                    secara mendadak; laporan jenis ini patut dibuat sekiranya diperlukan dan sesuai dengan keadaan. Apapun jenis 
                    bentuk yang dipilih, laporan patut dikeluarkan selalu dan pada masa yang ditentukan, dan anda patut berusaha 
                    untuk memastikan maklumat utama boleh diakses kepada pelbagai pembaca, termasuk mereka yang tiada akses kepada 
                    internet.
                </p>
                <OwnWords>
                    <h2>
                        <OwnWords.Icon alt="Feedback"/> <strong>Dengan kata-kata mereka sendiri: Kajian pengeluaran gula negara oleh Syarikat Coca-Cola* mengenai buruh kanak-kanak, buruh paksa dan hak tanah.</strong>

                    </h2>
                    <p>
                        
                        “Kajian negara ialah usaha Syarikat Coca-Cola untuk memahami dengan lebih baik rantai bekalan dalam mendapatkan 
                        sumber gula dan mendedahkan bagaimana syarikat bekalan gula Coca-Cola dan rakan kongsi yang membotolkan minuman 
                        menangani risiko utama.   Kajian ini bukan audit, tetapi kajian, dan tumpuannya kepada tiga elemen penting: buruh 
                        kanak-kanak, buruh paksa dan hak tanah, sebab ini semua dianggap faktor risiko tinggi dalam rantai bekalan 
                        pertanian Coca-Cola.”
                    </p>
                    <p>
                        Sila baca lagi tentang 
                        {" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.coca-colacompany.com/content/dam/journey/us/en/policies/pdf/human-workplace-rights/addressing-global-issues/sugar-study-methodology-overview.pdf"
                        title="methodology"
                    >
                        metodologi
                    </a>{" "}
                                    
                        kajian negara oleh Coca-Cola dan teroka 
                        {" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.coca-colacompany.com/policies-and-practices/country-sugar-studies"
                        title="country sugar studies"
                    >
                        kajian gula negara
                    </a>{" "}
                                    
                    yang dikeluarkan setakat ini.
                        </p>
                </OwnWords>
            </div>
        </StaticData>
    );
};

export default ms;
