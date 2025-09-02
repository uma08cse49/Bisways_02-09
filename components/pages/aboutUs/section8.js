
import Image from 'next/image'
import Link from 'next/link'
export default function Section8() {
	return (
		<>

			<section className="s-process tf-spacing-1">
				<div className="tf-overlay" />
				<div className="bg-image">
					<div className="rellax" data-rellax-speed="0.3">
						<img
							width="0"
							height="0"
							sizes="100vw"
							style={{ width: "100%", height: "100%" }}
							src="/images/section/process.jpg" data-src="/images/section/process.jpg" alt="" className="lazyload" />
					</div>
				</div>
				<div className="content-wrap">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-6">
								<div className="heading mb-50">
									<p className="s-sub-title text-white mb-15">
										<i className="icon-angles-right moveLeftToRight" />
										WHAT MAKES US DIFFERENT
									</p>
									
								</div>
								
							</div>
							<div className="col-lg-6 " style={{background:"none",padding:"20px",borderRadius:"10px"}}>
								<div className="wg-process mb-10  " data-wow-delay="0s" style={{backgroundColor:"#ffcd4c",fontWeight:"bolder"}}>
									
									<p className="text">
										We begin by understanding your business structure, goals,
										 and financial challenges through a detailed consultation.
									</p>
								</div>
								<div className="wg-process mb-10 wow fadeInUp" data-wow-delay="0s" style={{backgroundColor:"#ffcd4c"}}>
									
									<p className="text">
										Our team analyzes your books, compliance status, and operational gaps to identify key improvement areas.
									</p>
								</div>
								<div className="wg-process mb-10 wow fadeInUp" data-wow-delay="0s" style={{backgroundColor:"#ffcd4c"}}>
									
									<p className="text">
										We craft tailored solutions — from compliance to Virtual CFO services — and integrate them seamlessly into your workflow.
									</p>
								</div>
								<div className="wg-process  wow fadeInUp" data-wow-delay="0s" style={{backgroundColor:"#ffcd4c"}}>
									
									<p className="text">
										With continuous support, real-time reporting, and strategic advice, we help you stay compliant and scale sustainably.
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
