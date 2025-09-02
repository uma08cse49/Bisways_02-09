import Image from 'next/image'
import Link from 'next/link'

export default function Section2() {
	return (
		<>
			<section className="s-process tf-spacing-1 mt-4" style={{ backgroundColor: "#f2edea", padding: "50px 0" }}>
				<div className="content-wrap">
					<div className="tf-container">
						<div className="row justify-center">
							<div className="col-lg-10 mx-auto">
								{/* Main Heading */}
								<div className="heading mb-50 text-center">
									<p className="s-sub-title text-grey mb-15 justify-center">
										<i className="icon-angles-right moveLeftToRight" />
										Startups & Entrepreneurs
									</p>
									<p className="s-title text-black text-anime-wave text-2xl md:text-3xl font-semibold">
										From idea to incorporation — <span>we’re with you at every step.</span>
									</p>
								</div>

								{/* How We Help Section */}
								<div style={{ backgroundColor: "white", borderRadius: "20px", padding: "30px", boxShadow: "0 6px 18px rgba(0,0,0,0.08)" }}>
									<h3 className="font-main-2 text-black mb-20 text-center text-2xl font-bold">
										How We Help
									</h3>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
										{[
											"Choosing the right business structure (Pvt Ltd vs LLP vs Sole Proprietor)",
											"Startup registration, GST, MSME, and IP setup",
											"Virtual CFO for monthly reporting and funding support",
											"Investor compliance, ESOP structuring, and audit readiness"
										].map((item, idx) => (
											<div key={idx} className="flex items-start gap-4 p-4 rounded-lg shadow hover:shadow-lg transition bg-white border border-gray-100">
												<div className="flex-shrink-0 bg-[#ffcd4c] rounded-full w-10 h-10 flex items-center justify-center text-white text-xl">
													<i className="icon-check-2" />
												</div>
												<p className="text-black font-medium text-lg leading-relaxed">{item}</p>
											</div>
										))}
									</div>
								</div>

								{/* Who Benefits Section */}
								<div style={{ backgroundColor: "white", borderRadius: "20px", padding: "30px", boxShadow: "0 6px 18px rgba(0,0,0,0.08)", marginTop: "30px" }}>
									<h3 className="font-main-2 text-black mb-15 text-center text-2xl font-bold">
										You’ll Benefit If You Are:
									</h3>
									<p className="text-black text-center text-lg font-semibold">
										 A founder, co-founder, or early-stage team trying to get compliant, pitch-ready, or scalable
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
