
import Link from 'next/link'
export default function Section4() {
	return (
		<>

			<section className="s-solution tf-spacing-1">
				<div className="mb-70">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-8">
								<div className="content">
									<p className="s-title text-white text-anime-wave">
										OUR CLIENTS & IMPACT<span>VERTICALS</span>
									</p>
									<p className="text text-white">
										At Bisways, we pride ourselves on serving a diverse range of clients —
										from founders just starting out to well-established institutions and charitable organizations.
										Our approach is always consultative, practical, and tailored to the unique needs of each sector.

									</p>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="content-right">
									<div className="wg-curve-text tf-animate__box-2 animate__slow">
										<div className="icon">
											<i className="flaticon-rocket" />
										</div>
										<div className="text-rotate">
											<div className="circle">
												<div id="circularText" className="text" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="tf-container w-1780">
					<div className="row">
						<div className="col-lg-4">
							<div className="wg-feature-item tf-hover-icon">
								
								<p className="title font-main-2 fw-7">
									<Link href="/our-service">
										💼 Charitable Trusts & Foundations
									</Link>
								</p>
								<p className="text">
									We assist with registration, 12A/80G certification, CSR-1, FC(R)A,
									and ongoing statutory compliance — helping social impact organizations stay audit-ready and donor-compliant.
								</p>


							</div>
						</div>
						<div className="col-lg-4">
							<div className="wg-feature-item style-2 tf-hover-icon">
								
								<p className="title font-main-2 fw-7">
									<Link href="/our-service-02">
										🚀 Startups & Private Limited Companies
									</Link>
								</p>
								<p className="text">
									From incorporation to Virtual CFO support, we help startups set up strong financial systems, meet investor expectations,
									and stay compliant with MCA, GST, and Income Tax norms.
								</p>


							</div>
						</div>
						<div className="col-lg-4">
							<div className="wg-feature-item last style-3 tf-hover-icon">
								
								<p className="title font-main-2 fw-7">
									<Link href="/our-service" className="text-white hover-text-main-yellow">
										🏫 Educational Institutions & Skill Centres
									</Link>
								</p>
								<p className="text">
									We support schools, academies, and vocational centres in managing trust documentation,
									affiliation audits, and financial transparency.
								</p>


							</div>
						</div>

						<div className="col-lg-4 mt-4">
							<div className="wg-feature-item style-2 tf-hover-icon">
								
								<p className="title font-main-2 fw-7">
									<Link href="/our-service-02">
										🏗️ Construction & Architecture Firms
									</Link>
								</p>
								<p className="text">
									GST structuring, project audits,
									and entity setup are handled end-to-end — ensuring every regulatory aspect is aligned with project growth and vendor needs.
								</p>


							</div>
						</div>
						<div className="col-lg-4 mt-4">
							<div className="wg-feature-item style-2 tf-hover-icon">
								
								<p className="title font-main-2 fw-7">
									<Link href="/our-service-02">
										🛒 Digital, API & eCommerce Businesses
									</Link>
								</p>
								<p className="text">
									Our clients in tech and commerce benefit from proactive tax advice, MSME/Udyam filings,
									and legal guidance on platform growth, branding, and vendor agreements.
									No matter the sector — our promise is simple: clarity, compliance, and continuity for every client we serve.

								</p>


							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
