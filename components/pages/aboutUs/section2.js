'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from "react"
export default function Section2() {
	useEffect(() => {
		const elements = document.querySelectorAll(
			".tf-animate-1, .tf-animate-2, .tf-animate-3, .tf-animate-4"
		)

		if (!elements.length) return

		const isSmallScreen = window.matchMedia("(max-width: 550px)").matches

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("active-animate")
					}
				})
			},
			{
				root: null, // viewport
				threshold: isSmallScreen ? 0.2 : 0.3, // Adjust based on screen size
			}
		)

		elements.forEach((el) => observer.observe(el))

		return () => {
			elements.forEach((el) => observer.unobserve(el))
		}
	}, [])
	return (
		<>

			<section className="s-why-choose-3 tf-spacing-8">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-7">
							<div className="wg-company">
								<ul className="list">
									<li className="wow fadeInUp" data-wow-delay="0s">
										<div className="title">
											<div className="icon">
												<i className="flaticon-rocket" />
											</div>
											<Link href="/#">
												Company Mission
											</Link>
										</div>
										<p className="text">
											To empower entrepreneurs, institutions,
											and impact-led organizations through strategic financial and regulatory solutions — enabling sustainable growth,
											compliance, and impact.
										</p>
									</li>
									<li className="wow fadeInUp" data-wow-delay="0s">
										<div className="title">
											<div className="icon">
												<i className="flaticon-market" />
											</div>
											<Link href="/#">
												Company Vision &amp; Goals
											</Link>
										</div>
										<p className="text">
											We envision a world where businesses soar by focusing on what they do best,
											while we transform their operations into seamless,
											compliant, and efficient systems that fuel growth and innovation.
										</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="image tf-hover">
								<div className="hover-1">
									<img
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
										src="/images/section/aboutus-3.jpg" data-src="/images/section/aboutus-3.jpg" alt="" className="lazyload tf-animate-2" />


								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="content">
								<div className="content-left">
									<p className="s-sub-title text-white">
										<i className="icon-angles-right moveLeftToRight" />
										OUR STORY
									</p>
									<p className="s-title text-white mb-30 text-anime-wave">
										Bisways was born out of a simple but powerful insight:

									</p>
									<p className="text text-white">
										"Entrepreneurs and institutions spend too much time managing paperwork and compliance,
										instead of focusing on their mission."
										<br />
										<br />
										What began as a one-person advisory setup has now grown into a robust team of CFOs,
										accountants, legal advisors, trust consultants, and digital experts — all working together under one roof.
									</p>
								</div>
								<div className="content-right">
									<p className=" text-white mb-30 text-anime-wave" style={{ fontSize: "30px" }}>Today, we proudly serve:</p>
									<div className="wg-skill mb-40 ">
										<div className="name">
											<p>
												Businesses and Trusts across India
											</p>
											<p className="percent">
												500+
											</p>
										</div>
										<div className="progress tf-animate-1">
											<div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{ width: '89%' }} />
										</div>
									</div>
									<div className="wg-skill mb-40 ">
										<div className="name">
											<p>
												Monthly GST Clients
											</p>
											<p className="percent">
												100+
											</p>
										</div>
										<div className="progress tf-animate-1">
											<div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{ width: '73%' }} />
										</div>
									</div>
									<div className="wg-skill ">
										<div className="name">
											<p>
												NGOs and charitable organizations
											</p>
											<p className="percent">
												250+
											</p>
										</div>
										<div className="progress tf-animate-1">
											<div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{ width: '80%' }} />
										</div>
									</div>
									<p className=" text-white mb-30 text-anime-wave" style={{ fontSize: "20px",marginTop:"20px" }}>
										"Our team has also helped set up and manage complex compliance and registration projects for Construction Firms,
										 E-commerce Startups, CSR Foundations, Tech Companies, Educational Institutions, and Export Businesses."
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
