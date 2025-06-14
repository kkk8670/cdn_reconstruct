export default {
    源站设置: 'Source Settings',
    '指定回源地址和监听端口，支持回源到IP及域名。': 'Specify the back-to-source address and listening port, and support back-to-source to IP and domain name.',
    'http 协议默认开 80、8080 端口，https 协议默认开 443、8443 端口，不可更改使用，开通TCP安全加速可支持其他端口；': 'The http protocol opens ports 80 and 8080 by default, and the https protocol opens ports 443 and 8443 by default, which cannot be changed. Open TCP security acceleration can support other ports;',
    '回源到 IP 请填写服务器 IP 地址，回源到域名请填写对应域名；': 'For back-to-source IP, please fill in the server IP address, back-to-source to domain name, please fill in the corresponding domain name;',
    '使用HTTPS协议请上传 SSL&TLS 并开启 HTTPS，否则将影响站点正常访问；': 'Please upload SSL&TLS and enable HTTPS when using HTTPS protocol, otherwise it will affect the normal access of the site;',
    不支持端口: 'Port not supported',

    添加源站: 'Add Source Site',
    协议类型: 'Protocol type',
    监听端口: 'Listening port',
    取源协议: 'Source protocol',
    源站地址: 'Source site address',
    均衡方式: 'Load Balance',
    回源设置: 'Source Setting',
    线路设置: 'Line Setting',
    端口: 'Port',
    线路: 'Line',
    权重: 'Weight',
    '1. 节点取源时所用协议和客户端访问协议保持一致，源站需要同时支持 80 和 443 端口，否则有可能造成节点取源失败；': '1. The protocol used by the node to obtain the source must be consistent with the client access protocol. The source station needs to support both ports 80 and 443, otherwise it may cause the node to fail to obtain the source;',
    '2. 批量新增源站时，多个监听端口请用英文输入法下逗号分开，这时回源端口将与监听端口保持一致；': '2. When adding source sites in batches, please separate multiple listening ports with commas under the English input method. At this time, the back-to-source port will be the same as the listening port;',
    '3. 取源协议为协议跟随时，回源端口将与监听端口保持一致；': '3. When the source protocol is the protocol follow, the source return port will be the same as the listening port;',
    '4. 线路配置优先级：主线路 > 备线路，同一线路类型下，优先级等级越高，则权重越大。': '4. Line configuration priority: main line > backup line, under the same line type, the higher the priority level, the greater the weight.',
    请输入监听端口: 'Please Enter Listening port',
    协议跟随: 'The protocol follows',
    轮询: 'Polling',
    IP哈希: 'Hash',
    COOKIE保持: 'Cookie',
    回源到IP: 'back-to-source to ip',
    回源到域名: 'back-to-source to domain',
    主线路: 'Main Line',
    备线路: 'Spare Line',
    '支持 IPv4、IPv6 格式': 'Support IPv4, IPv6',
    请输入IP地址: 'Please enter ip',
    请输入域名: 'Please enter domain',
    新增一行: 'Add a new line',
    主: 'Main',
    备: 'Spare',

    // 回源HOST
    '回源 HOST': 'Source HOST',
    '自定义性能优化节点取源站数据时所需访问的 WEB 服务器域名。': 'The domain name of the WEB server that needs to be accessed when the custom performance optimization node fetches data from the origin site.',
    '默认（域名本身）': 'Default (the domain itself)',
    '回源 SNI': 'Source SNI',
    '当业务源站IP绑定多个域名且CDN节点以HTTPS协议访问源站时，必须指定访问的具体域名。': 'When the business origin IP is bound to multiple domain names and the CDN node accesses the origin using HTTPS protocol, you must specify the specific domain name to access.',
    '自定义 SNI': 'Customize SNI',
    '只对下面这些文件后缀名生效：': 'Only valid for the following file suffixes:',
    视频: 'Video',
    安装包: 'Installation package',
    音频: 'Audio',
    其他: 'Others',
    'Range 回源': 'Range Source',
    '需要源站支持Range请求，开启后可以按块缓存，按需回源，提高缓存命中率和响应速度。': 'The origin site needs to support Range requests. After enabling, you can cache by block and return to the origin on demand to improve the cache hit rate and response speed.',
    回源保持长连接: 'Keep long connection back to source',
    '回源使用连接保活可以复用现有的连接（需源服务器支持keepalive），避免每次请求都重新建立TCP请求，可大幅提升回源性能，减小延迟。': 'Back to source connection can reuse existing connections (the source server needs to support keepalive) by using connection liveness preservation to avoid re establishing TCP requests for each request, which can greatly improve the back to source performance and reduce latency.',
    缓存链接数量: 'Number of cache links',
    连接超时时间: 'Connection timeout',
    回源超时配置: 'Source timeout configuration',
    '安全节点的回源请求TCP建连超时等待时间默认为30秒，您可以根据实际需求设置回源请求的最长等待时间，最长不超过300 秒。': 'By default, the timeout waiting time for the TCP connection of the back to source request of the security node is 30 seconds. You can set the maximum waiting time for the back to source request according to the actual needs, which cannot exceed 300 seconds.',
    TCP连接超时时间: 'TCP connection timeout',
    回源加载超时时间: 'Source load timeout',
    回源请求超时时间: 'Source request timeout',
    客户端请求超时配置: 'Client request timeout configuration',
    '服务器端读取客户端请求头数据的超时时间，如果超过这个时间客户端还没有发送完整的数据，服务器端将返回408错误。': 'The timeout period for the server to read the client request header data. If the client has not sent complete data beyond this time, the server will return an error of 408.',
    请求头超时时间: 'Request header timeout',
    请求体超时时间: 'Request body timeout',
    服务端等待客户端两次请求的间隔时间: 'The interval for the server to wait for two requests from the client',
    请求间隔超时时间: 'Request interval timeout',
    秒: 'seconds'
}
