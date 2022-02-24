import React from "react";
import StaticData from "../../../../../../components/StaticData";
import OwnWords from "../../../../../../components/OwnWords";


const en = () => {
    return (
        <StaticData>
            <div>
                <h1>
                    <strong>Pengambilan dan pengekalan pekerja</strong>
                </h1>
                <p>
                    Jumlah&nbsp;
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.conecomm.com/research-blog/2016-millennial-employee-engagement-study"
                    >
                    kajian
                    </a>
                    &nbsp;semakin banyak menunjukkan bahawa pekerja, terutama yang lebih muda, lebih suka bekerja
                    untuk syarikat-syarikat bertanggungjawab dalam hal sosial atau alam sekitar, dan mengambil
                    kira ini apabila membuat pertimbangan mengenai pekerjaan mereka di masa depan.
                </p>
                <OwnWords>
                    <h2>
                        <OwnWords.Icon alt="Feedback"/> <strong>In Their Own Words</strong>
                        {": "}
                    </h2>
                    <p>
                        Placeholder
                    </p>
                </OwnWords>
            </div>
        </StaticData>
    );
};

export default en;
