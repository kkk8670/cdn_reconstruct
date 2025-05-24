// src/pages/cdn_users/Overview/index.tsx

import React from 'react';



const OverviewPage: React.FC = () => {
    return (
        <div className="overview-container">
            <div className="display-card vertical">
                <div className="choice-bar">近1小时 近24小时 近7天</div>
                <div className="monitor-grid justify-between">
                    <div className="monitor-item display-box">
                        <div className="monitor-label">计费带宽</div>
                        <div className="monitor-value">0.00 Bbps</div>
                    </div>
                    <div className="monitor-item display-box">
                        <div className="monitor-label">总流量</div>
                        <div className="monitor-value">0.00 B</div>
                    </div>
                    <div className="monitor-item display-box">
                        <div className="monitor-label">总请求数</div>
                        <div className="monitor-value">0 次</div>
                    </div>
                </div>
                <div className="choice-bar">流量 带宽 请求数</div>
                <div className="monitor-grid">
                    <div className="flow-chart display-box">chart</div>
                    <div className="flow-list display-box">Top10总流量</div>
                </div>
            </div>

            <div className="display-card gap-4 ">
                <div className="display-box flex-1">
                    <div className="display-title">使用统计</div>
                    <div className="">
                        <div>接入域名数</div>
                        <div>转发端口数</div>
                        <div>证书总数</div>
                    </div>
                </div>
                <div className="display-box flex-1">
                    <div className="display-title">套餐流量情况</div>
                </div>
            </div>

            <div className="display-card">
                <div className="display-title">最新公告</div>
            </div>
        </div>
    );
};

export default OverviewPage;