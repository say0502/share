jQuery(function() {
    jQuery('#camera_wrap_1').camera({
        time: 3000, // 幻燈片時間
        transPeriod: 2000, // 幻燈片 轉換 時間
        thumbnails: true, // 小圖示 (二擇一)
        pagination: false, // 分頁 (二擇一)
        fx: 'curtainSliceLeft', //轉場特效:  curtainTopLeft, curtainTopRight, curtainBottomLeft, curtainBottomRight, curtainSliceLeft, curtainSliceRight, blindCurtainTopLeft, blindCurtainTopRight, blindCurtainBottomLeft, blindCurtainBottomRight, blindCurtainSliceBottom, blindCurtainSliceTop, stampede, mosaic, mosaicReverse, mosaicRandom, mosaicSpiral, mosaicSpiralReverse, topLeftBottomRight, bottomRightTopLeft, bottomLeftTopRight, bottomLeftTopRight, scrollLeft, scrollRight, scrollHorz, scrollBottom, scrollTop 
        hover: true, // 游標停在上方時，暫停
        height: '50%' // 幻燈片高度
    });
});
