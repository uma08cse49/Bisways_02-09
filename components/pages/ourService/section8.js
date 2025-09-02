import Image from 'next/image'
import Link from 'next/link'

export default function Section8() {
	return (
		<>
			<section className="s-process tf-spacing-1">
				{/* <div className="tf-overlay" /> */}
				
				<div className="content-wrap">
					<div className="tf-container">
						<div className="row" style={{backgroundColor:"#f2edea", padding:"30px",borderRadius:"20px"}}>
							<div className="col-lg-12">
								{/* Heading */}
								<div className="heading mb-50 text-center ">
									<p className="s-sub-title text-grey mb-15 justify-center">
										<i className="icon-angles-right moveLeftToRight" />
										API, Digital, & eCommerce Advisory
									</p>
									<p className="s-title text-black text-anime-wave">
										For online businesses, recharge/API providers, and digital creators
									</p>
								</div>
							</div>

							<div className=" mx-auto">
								{/* Why You Might Need This */}
								<div className=" mb-40 text-center" style={{backgroundColor:"white",boxShadow:"0 4px 12px rgba(0,0,0,0.05)",borderRadius:"20px",padding:"20px"}}>
									<h3 className="title font-main-2 mb-20 text-black">
										Why You Might Need This
									</h3>
									<p className="text-gray-200 max-w-3xl mx-auto">
										You may be earning from online platforms or running a digital product — we ensure you're legally compliant and ready to scale.
									</p>
								</div>

								{/* What's Included */}
								<div className=" mb-40" style={{backgroundColor:"white",boxShadow:"0 4px 12px rgba(0,0,0,0.05)",borderRadius:"20px",padding:"20px"}}>
									<h3 className="title font-main-2 mb-20 text-black text-center">
										What’s Included
									</h3>
									<ul className="benefit-list grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
										{[
											"API / DMT / BBPS business setup",
											"Refund policy, privacy policy, and T&C writing",
											"Udyam (MSME) registration",
											"Trademark & brand advisory",
											"Tax planning for influencers and creators",
										].map((item, idx) => (
											<li key={idx} className="flex items-start bg-white/10 p-4 rounded-lg hover:bg-[#ffcd4c]/20 transition">
												<div className="icon text-[#ffcd4c] mr-3 mt-1">
													<i className="icon-check-2" />
												</div>
												<p className="text-black">{item}</p>
											</li>
										))}
									</ul>
								</div>

								{/* Conclusion */}
								<div className=" text-center" style={{backgroundColor:"white",boxShadow:"0 4px 12px rgba(0,0,0,0.05)",borderRadius:"20px",padding:"20px"}}>
									<h3 className="title font-main-2 mb-20 text-black">
										Who It’s Best For
									</h3>
									<p className="text-gray-200 max-w-2xl mx-auto">
										Recharge businesses, fintechs, influencers, digital product sellers, YouTubers, and anyone online.
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
