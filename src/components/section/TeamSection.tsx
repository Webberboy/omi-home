import { teamDataProp } from "@/data/team";
import Image from "next/image";
import Link from "next/link";

export default function TeamSection() {
    return (
        <>
            <section className="section-team flat-spacing-3">
                <div className="container">
                    <h2 className="s-title only-title font-3 text-center">Meet our experts</h2>
                    <div className="row">
                        <div className="col-xl-10 mx-auto">
                            <div className="tf-grid-layout sm-col-2 lg-col-3 px-16 px-xl-0">
                                {teamDataProp.map((item, idx) => (
                                    <Link href="#" className="card-team hover-img4" key={idx}>
                                        <div className="content">
                                            <div className="team_image img-style4">
                                                <Image loading="lazy" width="886" height="951" src={`/assets/images/team/${item.image}`} alt="Team" />
                                            </div>
                                            <div className="team_info">
                                                <h5 className="name text-linear font-3">{item.name}</h5>
                                                <p className="text-body-3">{item.duty}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
