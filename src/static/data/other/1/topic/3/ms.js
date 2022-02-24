import React from "react";
import OwnWords from "../../../../../../components/OwnWords";
import StaticData from "../../../../../../components/StaticData";

const en = () => {
    return (
        <StaticData>
            <div>
                <h1>Reputasi Syarikat</h1>
                <p>
                    <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.conecomm.com/research-blog/2016-millennial-employee-engagement-study"
                        >
                    Kajian
                    </a>
                    &nbsp;mendapati bahawa pengguna semakin terbiasa dengan masalah penderaan pekerja, terutama
                    dalam industri pakaian, elektronik, kasut, dan pertanian, terutama coklat dan produk kopi.
                    Di samping itu, dengan ledakan media sosial, pendedahan yang menunjukkan buruh kanak-kanak,
                    buruh paksa atau keadaan kerja yang buruk dalam rantai bekalan, semakin mudah diketahui
                    pengguna dan merosakkan reputasi jenama dan memberi kesan buruk kepada penjualan atau pasaran saham.
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