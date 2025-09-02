import Image from 'next/image'
import Link from 'next/link'

export default function Section5() {
	return (
		<>
			<section className="s-process tf-spacing-2 mt-4" style={{ backgroundColor: "#f2edea", padding: "50px 0" }}>
				<div className="content-wrap">
					<div className="tf-container">
						<div className="row justify-center">
							<div className="col-lg-10 mx-auto">
								{/* Main Heading */}
								<div className="heading mb-40 text-center">
									<p className="s-sub-title text-grey mb-15 justify-center">
										<i className="icon-angles-right moveLeftToRight" />
										Educational Institutions & Training Centres
									</p>
									<p className="s-title text-black text-anime-wave">
										Secure recognition, maintain transparency and <span>file correctly.</span>
									</p>
								</div>

								{/* How We Help Section */}
								<div style={{ backgroundColor: "white", borderRadius: "20px", padding: "30px", boxShadow: "0 6px 20px rgba(0,0,0,0.1)" }}>
									<h3 className="font-main-2 text-black mb-20 text-center">
										How We Help
									</h3>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
										{[
											"Trust deed drafting and management",
											"Registration under the appropriate state/national authority",
											"ROC, audit, and income tax support",
											"Affiliation documentation and financial reporting"
										].map((item, idx) => (
											<div key={idx} className="flex items-start gap-4 p-4 rounded-lg shadow hover:shadow-lg transition bg-gray-50">
												<div className="text-[#ffcd4c] mt-1 text-2xl">
													<i className="icon-check-2" />
												</div>
												<p className="text-black font-medium text-lg">{item}</p>
											</div>
										))}
									</div>
								</div>

								{/* Who Benefits Section */}
								<div style={{ backgroundColor: "white", borderRadius: "20px", padding: "30px", boxShadow: "0 6px 20px rgba(0,0,0,0.1)", marginTop: "30px" }}>
									<h3 className="font-main-2 text-black mb-15 text-center">
										You’ll Benefit If You Are:
									</h3>
									<p className="text-black text-center text-lg font-semibold">
										 A school, tuition centre, or training institute operating under a trust or society
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
