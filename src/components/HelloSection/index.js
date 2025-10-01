import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/p-arin.jpg';
import Groom from '@assets/images/p-miftah.jpg';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  const finalSubtitle = 'Vào lúc 11:30, thứ Sáu, ngày 31 tháng 10 năm 2025 (tức ngày 11 tháng 9 năm 2025 âm lịch)';

  return (
	<Fragment>
	  <div id="fh5co-couple" css={styWrapper}>
		<div className="container">
		  <div className="row">
			<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
			  <h2 className="main-font">Trong niềm hạnh phúc thiêng liêng, chúng tôi xin trân trọng báo tin vui đến Quý vị</h2>
			  <h3 className="sub-title hs">{finalSubtitle}</h3>
			  <p className="info">
				Với tất cả tình yêu và sự trân trọng, chúng tôi mong muốn cùng nhau xây dựng một mái ấm hạnh phúc, trọn vẹn yêu thương và viên mãn. Rất mong nhận được lời chúc phúc của quý vị để ngày trọng đại của chúng tôi thêm phần ý nghĩa và tràn đầy niềm vui.
			  </p>
			</div>
		  </div>
		  <div className="couple-wrap">
			<div className="couple-half">
			  <div className="groom">
				<img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
			  </div>
			  <div className="desc-groom">
				<h3 className="main-font">Nguyễn Việt Dũng</h3>
				<p className="parent-name parent-name__top">
				  Nguyễn Trường Sơn <br />& Bùi Thị Thu Hằng
				</p>
			  </div>
			</div>
			<p className="heart text-center">
			  <i className="icon-heart2"></i>
			</p>
			<div className="and-love">
			  <i>&</i>
			</div>
			<div className="couple-half">
			  <div className="bride">
				<img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
			  </div>
			  <div className="desc-bride">
				<h3 className="main-font">Nguyễn Thị Thanh Trà</h3>
				<p className="parent-name">
				  Nguyễn Văn Giảng <br />& Đỗ Thị Nguyên
				</p>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
