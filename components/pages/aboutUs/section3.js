'use client'
import { sliderTestimonial2 } from '@/utils/swiperOptions'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Section3() {
	return (
		<>

			<section className="s-process-2 tf-spacing-1">
				<div className="bg-image">
					<div className="rellax" data-rellax-speed="0.5" data-bleed={5}>
						<img
							width="0"
							height="0"
							sizes="100vw"
							style={{ width: "100%", height: "auto" }}
							src="/images/widget/process.jpg" alt="" />
					</div>
				</div>
				<div className="tf-overlay" />
				<div className="relative z-5">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-5">
								<div className="content">
									<p className="s-sub-title text-white mb-15">
										<i className="icon-angles-right moveLeftToRight" />
										OUR MANAGEMENT TEAM
									</p>
									<p className="s-title text-white mb-40 text-anime-wave">
										Our Leadership<span> Team</span>

									</p>
									<p className="text text-white mb-40">
										At Bisways Consulting Group, we believe in building enduring client relationships backed by expertise,
										integrity, and collaboration. As a registered partnership firm,
										our leadership team brings together professionals with deep domain knowledge, operational excellence,
										and an unwavering commitment to client success.

									</p>
									<div className="bot">
										<div className="btn-slider-tesimonial btn-slide btn-prev style-4">
											<i className="icon-arrow-left" />
										</div>
										<div className="btn-slider-tesimonial btn-slide btn-next style-4">
											<i className="icon-arrow-right" />
										</div>
									</div>
									
								</div>
							</div>
							<div className="col-lg-7">
								<Swiper {...sliderTestimonial2} className="swiper-container slider-testimonial-2 overflow-hidden">
									<div className="swiper-wrapper">
										<SwiperSlide>
											<div className="wg-testimonial bg-white">
												<div className="icon style-circle mb-40">
													<i className="icon-quote-left-saying-speech" />
												</div>
												<p className="say font-main-2 mb-30">
													"
													A results-driven strategist and operations leader,
													Soundarya is the driving force behind Bisways. As CEO, she leads the firm's vision,
													partnerships, and delivery excellence across all service verticals.
													With a passion for compliance innovation and people-focused leadership,
													she ensures every client experience is structured, insightful, and impact-driven.

													"
												</p>
												<div className="bot">
													<Link href="/#" className="name fw-7"> Soundarya S </Link>
													<p className="duty">Founder & Chief Executive Officer (CEO)</p>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="wg-testimonial bg-white">
												<div className="icon style-circle mb-40">
													<i className="icon-quote-left-saying-speech" />
												</div>
												<p className="say font-main-2 mb-30">
													"
													Sarath.B brings over 10 years of experience in statutory compliance, financial audits,
													and tax structuring. Known for his sharp regulatory interpretation and client-first attitude,
													he leads the firm’s audit, income tax, and ROC filing verticals, ensuring clients stay fully compliant and financially sound.

													"
												</p>
												<div className="bot">
													<Link href="/#" className="name fw-7"> Sarath B </Link>
													<p className="duty">Head – Audit & Taxation</p>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="wg-testimonial bg-white">
												<div className="icon style-circle mb-40">
													<i className="icon-quote-left-saying-speech" />
												</div>
												<p className="say font-main-2 mb-30">
													"
													Manimegalai handles compliance and operational support for charitable trusts, NGOs, and institutions.
													From obtaining 12AB/80G approvals to CSR alignment and FCRA advisory,
													she ensures that social sector entities operate with credibility, compliance, and impact.
													"
												</p>
												<div className="bot">
													<Link href="/#" className="name fw-7"> Manimegalai R </Link>
													<p className="duty">Specialist – NGO & Trust Advisory</p>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="wg-testimonial bg-white">
												<div className="icon style-circle mb-40">
													<i className="icon-quote-left-saying-speech" />
												</div>
												<p className="say font-main-2 mb-30">
													"
													Shankar helps clients migrate from manual to digital systems — enabling cloud accounting,
													real-time dashboards, compliance calendars, and automated workflows.
													His work reduces errors and enhances regulatory transparency across client operations.


													"
												</p>
												<div className="bot">
													<Link href="/#" className="name fw-7"> Shankar D </Link>
													<p className="duty">Consultant – Digital Transformation</p>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="wg-testimonial bg-white">
												<div className="icon style-circle mb-40">
													<i className="icon-quote-left-saying-speech" />
												</div>
												<p className="say font-main-2 mb-30">
													"
													Karthikeyan supports early-stage founders with entity registration, regulatory setup,
													cap table structuring, and statutory planning.
													His goal is to make startups investor-ready and regulation-compliant from day one.
													"
												</p>
												<div className="bot">
													<Link href="/#" className="name fw-7"> Karthikeyan E </Link>
													<p className="duty">Advisor – Startup Compliance & Structuring</p>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="wg-testimonial bg-white">
												<div className="icon style-circle mb-40">
													<i className="icon-quote-left-saying-speech" />
												</div>
												<p className="say font-main-2 mb-30">
													"

													Our CFO team is a powerhouse of B.Com and MBA professionals who manage bookkeeping, reconciliations,
													GST, payroll, TDS, ROC filings, and more. Structured into client pods with review oversight, this team ensures timely filings,
													clean books, and actionable MIS reports.

													"
												</p>
												<div className="bot">
													<Link href="/#" className="name fw-7"> Virtual CFO Desk </Link>
													<p className="duty">10+ Qualified Finance Professionals</p>
												</div>
												<div className="bot mt-4">
										<p className="fw-7 mt-2">
											•	Auditors, legal advisors, and trust governance specialists
										</p>
										<p className="fw-7 mt-2">
											•   Digital and startup consultants
											Together, we combine cross-functional skills with one common goal: client success.

										</p>
									</div>
											</div>
										</SwiperSlide>

									</div>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}

