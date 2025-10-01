import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
//import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span className="bismillah"></span>
              <h2 className="main-font main-font__wedding">Lễ Thành Hôn & Tiệc Cưới</h2>
              <span className="sub-title sub-title__wedding">Buổi lễ được tổ chức vào:</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
            <WeddingInfoBox
                title="Lễ thành hôn & Tiệc cưới"
                time="11:30"
                date="Thứ Sáu, ngày 31 tháng 10 năm 2025 (tức ngày 11 tháng 9 năm 2025 âm lịch)"
                description="Trung Tâm Tiệc Cưới & Sự Kiện Promes Center - Số 122 đường Xuân Thủy - Phường Cầu Giấy - Thành phố Hà Nội"
            />
            {/* <WeddingInfoBox
              title="Syukuran Pernikahan"
              time="11.00 s/d 15.00 WIB"
              date="Minggu, 11 September 2022"
              description="Jl. Laswi Cangkring RT/RW 05/07 kel. Jelekong, kec. Baleendah, kab. Bandung"
            /> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
