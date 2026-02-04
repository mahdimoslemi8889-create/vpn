import { connect } from "cloudflare:sockets";

/**
 * LAST UPDATE
 *  - Wed, 19 November 2025, 04:20 UTC.
 *    https://github.com/NiREvil/zizifn
 *
 * UUID
 *  - Generate your own uuid: https://www.uuidgenerator.net
 *  - Add multiple: comma-separated (uuid1, uuid2) - Line 26.
 *
 * PROXY IP LAND
 *  - An array of proxy addresses. You can add multiple proxies to the list.
 *    Example: ['proxy1.ir:8443', '1.1.1.1:443', 'proxy2.com:2053'], - Line 28.
 *  - Daily, tested proxy list:
 *    https://github.com/NiREvil/vless/blob/main/sub/ProxyIP.md
 *
 * SCAMALYTICS API
 *  - Default key is public, Line 31, 32, 33.
 *  - If you fork or expect heavy use, get your own free key:
 *    https://scamalytics.com/ip/api/enquiry?monthly_api_calls=5000
 *
 */

const Config = {
  userID: "81e3b22b-fa18-440b-8075-17a0221297ba",

  proxyIPs: ['103.106.0.123:443','103.106.1.2:443','103.113.69.63:443','103.231.72.170:443','103.231.72.240:443','103.231.72.4:443','103.231.73.153:443','103.231.75.115:443','103.35.188.157:443','103.7.54.214:443','104.167.196.72:443','104.225.153.70:443','104.225.235.38:443','104.238.151.229:443','104.248.145.216:443','104.248.17.101:443','107.150.25.185:443','107.172.145.153:443','107.172.146.13:443','107.173.146.70:443','107.173.149.215:443','107.173.87.103:443','107.174.107.239:443','107.174.121.122:443','107.174.121.46:443','107.174.131.26:443','107.174.202.20:443','107.174.204.129:443','107.175.194.31:443','109.123.231.212:443','109.199.122.5:443','109.199.126.6:443','116.203.58.165:443','128.199.0.28:443','128.199.32.21:443','13.200.192.197:443','13.250.131.37:443','13.250.31.132:443','130.0.238.236:443','134.122.61.31:443','134.122.69.91:443','134.122.77.148:443','134.122.99.51:443','134.209.148.128:443','134.209.227.204:443','134.209.26.45:443','135.181.104.175:443','136.118.180.134:443','136.243.3.103:443','136.244.80.245:443','137.74.50.101:443','138.124.107.35:443','138.197.183.219:443','138.201.170.108:443','138.68.163.131:443','139.84.163.149:443','141.94.220.210:443','141.94.222.214:443','141.94.223.220:443','142.132.178.99:443','142.93.136.199:443','143.198.31.221:443','143.244.190.195:443','146.0.73.202:443','146.0.73.211:443','146.0.76.26:443','146.0.79.109:443','146.0.79.124:443','146.0.79.33:443','146.19.80.84:443','146.190.236.144:443','146.190.55.58:443','147.135.10.209:443','147.135.209.171:443','147.182.229.237:443','148.251.134.94:443','149.28.21.106:443','149.28.92.56:443','149.56.14.62:443','152.228.134.239:443','152.228.134.60:443','152.228.216.146:443','152.228.216.172:443','152.228.217.69:443','154.21.201.83:443','154.9.227.100:443','155.138.128.135:443','157.230.27.167:443','159.223.14.204:443','159.223.224.134:443','159.65.19.63:443','16.176.42.97:443','16.63.207.85:443','161.35.195.134:443','162.19.241.200:443','162.19.247.245:443','162.19.27.52:443','162.243.115.21:443','162.243.115.23:443','162.55.169.245:443','164.90.168.91:443','164.90.203.215:443','164.90.205.37:443','164.92.210.231:443','165.227.237.209:443','165.232.124.35:443','165.232.129.138:443','165.232.89.21:443','165.232.92.35:443','165.232.92.96:443','165.232.95.188:443','167.114.67.25:443','167.172.101.156:443','167.172.164.250:443','167.172.182.52:443','167.172.187.174:443','167.235.149.67:443','167.235.242.114:443','167.71.45.93:443','167.71.47.237:443','167.99.58.113:443','167.99.73.22:443','170.64.227.71:443','171.22.117.106:443','171.22.124.215:443','171.22.127.164:443','172.245.148.211:443','172.245.54.238:443','174.137.61.42:443','174.138.8.21:443','176.222.52.157:443','176.222.52.201:443','176.222.52.219:443','176.222.52.246:443','176.222.54.227:443','176.222.55.163:443','176.222.55.17:443','176.222.55.197:443','176.222.55.84:443','176.9.24.177:443','176.97.74.90:443','176.97.76.192:443','176.98.40.94:443','178.128.80.43:443','178.128.86.3:443','178.156.139.174:443','178.23.190.125:443','178.32.58.147:443','178.62.197.41:443','178.62.239.110:443','178.62.242.239:443','178.62.81.173:443','178.63.88.12:443','18.133.198.66:443','18.170.77.148:443','18.183.158.211:443','18.216.55.100:443','18.222.50.18:443','184.169.181.217:443','185.130.224.202:443','185.130.225.101:443','185.130.225.218:443','185.130.225.38:443','185.156.172.196:443','185.193.66.128:443','185.211.6.152:443','185.231.204.186:443','185.231.206.61:443','185.231.207.113:443','185.231.207.114:443','185.231.207.119:443','185.234.57.153:443','185.235.243.172:443','185.236.233.109:443','185.238.170.8:443','185.239.208.199:443','185.242.86.241:443','185.245.182.254:443','185.250.148.240:443','185.4.65.44:443','185.70.184.38:443','185.70.185.92:443','185.70.186.69:443','185.70.187.38:443','188.116.23.125:443','188.166.162.201:443','188.245.242.229:443','192.142.54.29:443','192.210.175.108:443','192.210.175.185:443','192.227.237.81:443','192.3.155.217:443','192.3.251.89:443','193.0.179.117:443','193.109.69.214:443','193.84.2.175:443','193.84.3.188:443','194.164.192.16:443','194.164.59.222:443','194.165.59.20:443','194.180.188.184:443','194.180.188.241:443','194.180.189.194:443','194.180.189.36:443','194.247.183.118:443','194.247.187.191:443','194.247.187.244:443','194.54.157.81:443','195.154.184.21:443','195.16.74.73:443','195.201.152.120:443','195.201.228.23:443','195.201.231.143:443','195.201.245.155:443','195.54.175.160:443','198.12.74.78:443','198.46.138.249:443','198.46.143.134:443','199.38.148.63:443','2.56.125.126:443','2.56.127.137:443','2.56.173.185:443','2.56.179.171:443','2.56.179.239:443','2.56.179.89:443','202.148.52.13:443','202.148.52.47:443','206.189.105.167:443','206.189.114.222:443','206.189.199.115:443','206.189.48.135:443','207.180.235.19:443','207.246.97.82:443','209.38.220.181:443','209.38.36.214:443','209.38.38.145:443','209.38.46.172:443','209.97.173.243:443','212.227.90.142:443','212.237.218.226:443','212.237.218.227:443','212.237.219.176:443','212.237.219.183:443','212.237.219.24:443','212.237.219.37:443','212.237.219.51:443','212.237.219.99:443','212.52.1.143:443','212.52.1.214:443','212.83.190.180:443','212.90.120.231:443','213.159.76.175:443','213.159.77.220:443','213.165.88.177:443','216.225.197.195:443','216.24.178.29:443','217.154.53.220:443','217.182.79.55:443','217.195.200.52:443','23.94.103.194:443','23.94.105.240:443','23.94.211.148:443','23.94.25.53:443','23.94.43.51:443','23.95.113.61:443','23.95.189.91:443','23.95.193.203:443','3.0.50.69:443','3.112.21.102:443','3.29.240.49:443','3.29.76.68:443','3.68.128.205:443','3.82.153.90:443','3.86.231.180:443','3.86.85.68:443','31.207.45.168:443','31.207.47.231:443','31.97.115.47:443','34.136.112.104:443','34.143.159.175:443','34.175.202.195:443','34.212.240.129:443','34.215.121.223:443','34.219.121.250:443','34.22.190.30:443','34.221.105.86:443','34.69.150.180:443','34.74.139.91:443','34.83.245.149:443','34.88.165.220:443','34.94.2.102:443','35.176.187.206:443','35.182.226.236:443','35.210.99.51:443','35.212.204.241:443','35.239.174.101:443','35.241.172.224:443','35.78.229.176:443','37.1.194.138:443','37.1.195.124:443','37.1.201.192:443','37.1.209.186:443','37.1.210.238:443','37.221.125.112:443','37.221.127.254:443','37.252.10.91:443','37.252.11.17:443','37.252.5.75:443','37.252.6.119:443','37.27.215.232:443','37.27.24.143:443','37.27.36.208:443','37.27.92.255:443','38.135.122.158:443','38.180.100.80:443','38.180.109.174:443','38.180.109.215:443','38.180.111.12:443','38.180.133.83:443','38.180.146.215:443','38.180.160.199:443','38.180.161.32:443','38.180.205.71:443','38.180.214.162:443','38.180.216.120:443','38.180.219.131:443','38.180.225.181:443','38.180.225.185:443','38.180.230.32:443','38.180.242.200:443','38.180.248.29:443','38.180.249.123:443','38.180.35.205:443','38.180.38.137:443','38.180.39.23:443','38.180.84.86:443','38.180.85.203:443','38.244.128.87:443','38.244.136.135:443','38.244.137.183:443','38.244.137.32:443','38.244.139.135:443','38.244.143.10:443','38.244.144.150:443','38.244.154.149:443','38.244.177.180:443','38.244.31.27:443','40.177.65.8:443','43.198.204.35:443','43.205.45.56:443','43.218.77.16:443','44.209.52.7:443','44.244.220.166:443','45.12.130.169:443','45.12.131.34:443','45.12.145.134:443','45.12.145.254:443','45.12.145.80:443','45.12.146.12:443','45.12.146.156:443','45.12.151.185:443','45.12.151.34:443','45.14.244.124:443','45.14.247.130:443','45.140.147.139:443','45.144.29.77:443','45.15.127.213:443','45.15.162.45:443','45.32.55.253:443','45.63.114.83:443','45.67.216.25:443','45.67.229.8:443','45.67.231.159:443','45.67.231.221:443','45.77.236.204:443','45.8.132.142:443','45.8.144.73:443','45.8.145.149:443','45.8.145.244:443','45.82.255.128:443','45.83.141.54:443','45.83.141.93:443','45.83.20.29:443','45.83.21.13:443','45.83.21.88:443','45.84.138.237:443','45.85.146.60:443','45.87.153.53:443','45.87.154.216:443','45.87.154.245:443','45.89.110.69:443','45.89.196.226:443','45.89.52.228:443','45.89.52.247:443','45.89.52.9:443','45.89.55.70:443','45.94.209.202:443','46.101.110.196:443','46.101.189.202:443','46.101.231.70:443','46.17.100.128:443','46.17.100.135:443','46.17.101.133:443','46.17.101.206:443','46.17.101.252:443','46.17.102.108:443','46.17.102.236:443','46.17.102.93:443','46.17.97.105:443','46.17.97.176:443','46.17.97.237:443','46.17.99.222:443','46.62.139.251:443','46.62.148.243:443','49.13.220.86:443','49.13.234.155:443','49.13.64.206:443','49.51.197.141:443','5.161.50.246:443','5.180.45.30:443','5.181.20.175:443','5.181.20.213:443','5.182.36.223:443','5.182.38.111:443','5.182.38.70:443','5.182.39.243:443','5.182.39.57:443','5.230.44.233:443','5.252.21.228:443','5.252.22.46:443','5.253.43.216:443','5.39.216.208:443','5.39.219.107:443','5.39.219.126:443','5.39.219.35:443','5.45.66.11:443','5.45.70.203:443','5.61.32.186:443','5.61.32.190:443','5.61.34.69:443','5.61.39.183:443','5.61.41.183:443','5.61.41.30:443','5.61.45.128:443','5.61.46.9:443','5.61.47.9:443','5.61.61.160:443','5.75.198.232:443','5.75.239.69:443','5.78.50.75:443','50.112.182.213:443','51.158.205.169:443','51.178.141.36:443','51.178.29.175:443','51.195.119.2:443','51.195.235.202:443','51.210.148.173:443','51.210.179.47:443','51.210.96.90:443','51.38.44.17:443','51.68.141.223:443','51.77.140.254:443','51.77.141.117:443','51.77.141.212:443','51.81.209.10:443','51.91.248.215:443','51.91.248.218:443','51.91.248.251:443','51.91.248.61:443','51.91.248.99:443','51.91.249.115:443','51.91.249.22:443','51.91.249.223:443','51.91.249.37:443','51.91.249.45:443','51.91.249.9:443','51.91.250.152:443','51.91.250.183:443','51.91.250.218:443','51.91.250.33:443','51.91.250.92:443','51.91.251.144:443','51.91.251.149:443','51.91.251.153:443','51.91.251.16:443','51.91.251.160:443','51.91.251.189:443','51.91.251.198:443','51.91.251.31:443','51.91.251.37:443','51.91.252.200:443','51.91.252.44:443','51.91.252.61:443','51.91.253.112:443','51.91.253.174:443','51.91.253.211:443','51.91.253.218:443','51.91.253.83:443','51.91.254.100:443','51.91.254.153:443','51.91.254.173:443','51.91.254.177:443','51.91.254.189:443','51.91.254.22:443','51.91.254.78:443','51.91.254.97:443','51.91.255.121:443','51.91.255.152:443','51.91.255.163:443','51.91.255.197:443','51.91.255.23:443','51.91.255.5:443','51.91.255.97:443','51.91.40.26:443','52.11.185.114:443','52.42.207.6:443','52.43.90.185:443','52.47.142.5:443','54.151.41.196:443','54.172.15.53:443','54.216.143.197:443','54.246.82.250:443','54.247.36.82:443','54.36.186.141:443','54.37.235.201:443','54.77.206.41:443','57.128.176.147:443','57.128.176.149:443','57.128.176.37:443','57.128.176.82:443','57.128.176.87:443','57.128.176.90:443','57.128.177.172:443','57.128.177.176:443','57.128.177.185:443','57.128.177.191:443','57.128.177.198:443','57.128.177.203:443','57.128.177.206:443','57.128.177.218:443','57.128.177.22:443','57.128.177.235:443','57.128.178.122:443','57.128.178.164:443','57.128.178.183:443','57.128.178.196:443','57.128.178.224:443','57.128.178.232:443','57.128.178.36:443','57.128.178.42:443','57.128.178.63:443','57.128.178.79:443','57.128.179.10:443','57.128.179.111:443','57.128.179.189:443','57.128.179.254:443','57.128.179.45:443','57.128.179.9:443','57.128.180.133:443','57.128.180.238:443','57.128.180.59:443','57.128.180.80:443','57.128.180.98:443','57.128.181.125:443','57.128.181.14:443','57.128.181.151:443','57.128.181.18:443','57.128.181.219:443','57.128.181.221:443','57.128.181.24:443','57.128.181.247:443','57.128.181.82:443','57.128.181.89:443','57.128.181.91:443','57.128.182.21:443','57.128.182.234:443','57.128.182.255:443','57.128.182.27:443','57.128.182.52:443','57.128.182.61:443','57.128.182.76:443','57.128.183.107:443','57.128.183.108:443','57.128.183.13:443','57.128.183.133:443','57.128.183.137:443','57.128.183.138:443','57.128.183.142:443','57.128.183.143:443','57.128.183.196:443','57.128.183.214:443','57.128.183.225:443','57.128.183.245:443','57.128.183.248:443','57.128.183.3:443','57.128.183.35:443','57.128.183.40:443','57.128.183.59:443','57.128.183.6:443','57.128.183.77:443','57.128.183.79:443','57.128.183.82:443','57.128.183.90:443','57.129.137.196:443','57.129.137.197:443','57.129.137.198:443','57.129.137.199:443','57.129.137.200:443','57.129.137.201:443','57.129.137.202:443','57.129.137.203:443','57.129.137.204:443','57.129.137.205:443','57.129.137.206:443','57.129.137.207:443','57.129.137.208:443','57.129.137.209:443','57.129.137.210:443','57.129.137.211:443','57.129.137.212:443','57.129.137.213:443','57.129.137.214:443','57.129.137.215:443','57.129.137.216:443','57.129.137.217:443','57.129.137.218:443','57.129.137.219:443','57.129.137.220:443','57.129.137.221:443','57.129.137.222:443','57.129.137.223:443','57.129.137.224:443','57.129.137.225:443','57.129.137.226:443','57.129.137.227:443','57.129.137.228:443','57.129.137.229:443','57.129.137.230:443','57.129.137.232:443','57.129.137.233:443','57.129.137.234:443','57.129.137.235:443','57.129.137.236:443','57.129.137.237:443','57.129.137.238:443','57.129.137.239:443','57.129.137.240:443','57.129.137.241:443','57.129.137.242:443','57.129.137.243:443','57.129.137.244:443','57.129.137.245:443','57.129.137.49:443','57.129.137.50:443','57.129.137.51:443','57.129.137.52:443','57.129.137.53:443','57.129.137.55:443','57.129.137.56:443','57.129.137.57:443','57.129.137.58:443','57.129.137.60:443','57.129.137.61:443','57.129.137.62:443','57.129.137.63:443','57.129.137.64:443','57.129.137.65:443','57.129.137.66:443','57.129.137.67:443','57.129.137.68:443','57.129.137.69:443','57.129.137.70:443','57.129.137.71:443','57.129.137.72:443','57.129.137.73:443','57.129.137.75:443','57.129.137.76:443','57.129.137.77:443','57.129.137.78:443','57.129.137.79:443','57.129.137.80:443','57.129.137.81:443','57.129.137.82:443','57.129.137.83:443','57.129.137.84:443','57.129.137.85:443','57.129.137.86:443','57.129.137.87:443','57.129.137.89:443','57.129.137.90:443','57.129.137.91:443','57.129.137.92:443','57.129.137.93:443','57.129.137.94:443','57.129.137.95:443','57.129.137.96:443','57.129.47.52:443','57.129.61.64:443','62.3.12.185:443','62.84.183.222:443','62.84.183.223:443','62.84.183.224:443','64.176.68.73:443','64.225.77.36:443','64.226.111.107:443','64.227.158.180:443','64.227.42.152:443','65.108.209.46:443','65.108.225.161:443','65.108.243.114:443','65.108.245.196:443','65.108.249.52:443','65.108.83.128:443','65.109.143.33:443','65.109.177.244:443','65.109.182.62:443','65.109.188.1:443','65.109.196.96:443','65.109.200.234:443','65.109.205.229:443','65.109.209.224:443','65.109.213.219:443','65.109.214.233:443','65.109.229.212:443','65.20.113.182:443','65.20.99.180:443','65.21.224.102:443','65.21.225.15:443','65.21.62.180:443','65.21.63.226:443','66.151.32.170:443','66.151.33.42:443','66.151.34.116:443','66.151.34.156:443','66.151.34.203:443','66.151.35.226:443','66.151.35.81:443','66.245.196.42:443','66.248.207.52:443','66.248.207.96:443','69.12.83.134:443','69.12.83.170:443','70.34.205.63:443','70.34.218.89:443','70.34.243.123:443','74.119.195.141:443','74.119.195.197:443','74.208.150.213:443','74.211.102.111:443','77.91.101.14:443','77.91.72.13:443','78.47.146.151:443','83.136.248.101:443','84.246.85.197:443','84.247.166.22:443','85.10.198.99:443','85.235.65.121:443','85.31.236.117:443','85.90.208.87:443','86.104.72.16:443','86.104.73.185:443','86.104.73.192:443','86.104.75.180:443','87.106.39.39:443','87.106.65.110:443','88.99.189.60:443','88.99.252.146:443','88.99.92.84:443','89.44.193.174:443','89.58.57.45:443','91.107.148.154:443','91.107.155.13:443','91.107.158.77:443','91.107.160.25:443','91.107.185.122:443','91.107.186.7:443','91.107.190.152:443','91.107.250.153:443','91.107.251.113:443','91.107.255.196:443','91.132.132.237:443','91.225.219.70:443','91.228.10.248:443','91.99.227.218:443','92.118.233.25:443','93.179.115.54:443','94.130.72.184:443','94.131.101.246:443','94.131.11.254:443','94.131.112.176:443','94.131.117.210:443','94.131.12.15:443','94.131.12.56:443','94.131.123.173:443','94.131.13.214:443','94.131.14.72:443','94.131.2.70:443','94.131.9.241:443','94.131.9.65:443','94.237.33.207:443','95.164.11.48:443','95.164.113.160:443','95.164.114.217:443','95.164.21.123:443','95.164.34.32:443','95.164.62.196:443','95.217.13.36:443','95.217.134.104:443'],

  scamalytics: {
    username: "",
    apiKey: "",
    baseUrl: "",
  },

  socks5: {
    enabled: false,
    relayMode: false,
    address: "",
  },

  /**
   * @param {{ PROXYIP: string; UUID: any; SCAMALYTICS_USERNAME: any; SCAMALYTICS_API_KEY: any; SCAMALYTICS_BASEURL: any; SOCKS5: any; SOCKS5_RELAY: string; }} env
   */
  fromEnv(env) {
    const selectedProxyIP =
      env.PROXYIP || this.proxyIPs[Math.floor(Math.random() * this.proxyIPs.length)];
    const [proxyHost, proxyPort = "443"] = selectedProxyIP.split(":");

    return {
      userID: env.UUID || this.userID,
      proxyIP: proxyHost,
      proxyPort: proxyPort,
      proxyAddress: selectedProxyIP,
      scamalytics: {
        username: env.SCAMALYTICS_USERNAME || this.scamalytics.username,
        apiKey: env.SCAMALYTICS_API_KEY || this.scamalytics.apiKey,
        baseUrl: env.SCAMALYTICS_BASEURL || this.scamalytics.baseUrl,
      },
      socks5: {
        enabled: !!env.SOCKS5,
        relayMode: env.SOCKS5_RELAY === "true" || this.socks5.relayMode,
        address: env.SOCKS5 || this.socks5.address,
      },
    };
  },
};

const CONST = {
  ED_PARAMS: { ed: 2560, eh: "Sec-WebSocket-Protocol" },
  AT_SYMBOL: "@",
  VLESS_PROTOCOL: "vless",
  WS_READY_STATE_OPEN: 1,
  WS_READY_STATE_CLOSING: 2,
};

/**
 * Generates a random path string for WebSocket connection.
 * @param {number} length - Length of the random path part.
 * @param {string} [query] - Optional query string to append (e.g., 'ed=2048').
 * @returns {string} The generated path.
 */
function generateRandomPath(length = 12, query = "") {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `/${result}${query ? `?${query}` : ""}`;
}

const CORE_PRESETS = {
  // Xray cores – Dream
  xray: {
    tls: {
      path: () => generateRandomPath(12, "ed=2560"),
      security: "tls",
      fp: "chrome",
      alpn: "http/1.1",
      extra: {},
    },
    tcp: {
      path: () => generateRandomPath(12, "ed=2560"),
      security: "none",
      fp: "chrome",
      extra: {},
    },
  },

  // Singbox cores – Freedom
  sb: {
    tls: {
      path: () => generateRandomPath(18),
      security: "tls",
      fp: "chrome",
      alpn: "http/1.1",
      extra: CONST.ED_PARAMS,
    },
    tcp: {
      path: () => generateRandomPath(18),
      security: "none",
      fp: "chrome",
      extra: CONST.ED_PARAMS,
    },
  },
};

/**
 * @param {any} tag
 * @param {string} proto
 */
function makeName(tag, proto) {
  return "برن عشق کن-";
}
function createVlessLink({
  userID,
  address,
  port,
  host,
  path,
  security,
  sni,
  fp,
  alpn,
  extra = {},
  name,
}) {
  const params = new URLSearchParams({
    type: "ws",
    host,
    path,
  });

  if (security) {
    params.set("security", security);
    if (security === "tls") {
      params.set("allowInsecure", "1");
    }
  }

  if (sni) params.set("sni", sni);
  if (fp) params.set("fp", fp);
  if (alpn) params.set("alpn", alpn);

  for (const [k, v] of Object.entries(extra)) params.set(k, v);

  return `vless://${userID}@${address}:${port}?${params.toString()}#${encodeURIComponent(name)}`;
}

function buildLink({ core, proto, userID, hostName, address, port, tag }) {
  const p = CORE_PRESETS[core][proto];
  return createVlessLink({
    userID,
    address,
    port,
    host: hostName,
    path: p.path(),
    security: p.security,
    sni: p.security === "tls" ? randomizeCase(hostName) : undefined,
    fp: p.fp,
    alpn: p.alpn,
    extra: p.extra,
    name: makeName(tag, proto),
  });
}

const pick = (/** @type {string | any[]} */ arr) => arr[Math.floor(Math.random() * arr.length)];

/**
 * @param {Request} request
 * @param {string} core
 * @param {any} userID
 * @param {string} hostName
 */
async function handleIpSubscription(request, core, userID, hostName) {
  const url = new URL(request.url);
  const subName = url.searchParams.get("name");

  /**
   * Cake Subscription usage details
   * - These values create fake usage statistics for subscription clients
   * - Customize these values to display desired traffic and expiry information
   */
  const CAKE_INFO = {
    total_TB: 380, // Total traffic quota in Terabytes
    base_GB: 42000, // Base usage that's always shown (in Gigabytes)
    daily_growth_GB: 250, // Daily traffic growth (in Gigabytes) - simulates gradual usage
    expire_date: "2028-4-20", // Subscription expiry date (YYYY-MM-DD)
  };

  // Domains behind Cloudflare, fixed in the subscription links, you can add as many as you want..
  const mainDomains = [
    hostName,
    "creativecommons.org",
    "www.speedtest.net",
    "sky.rethinkdns.com",
    "cfip.1323123.xyz",
    "cfip.xxxxxxxx.tk",
    "go.inmobi.com",
    "singapore.com",
    "www.visa.com",
    "www.wto.org",
    "cf.090227.xyz",
    "cdnjs.com",
    "zula.ir",
    "csgo.com",
    "fbi.gov",
  ];

  const httpsPorts = [443, 8443, 2053, 2083, 2087, 2096]; // Standard cloudflare TLS/HTTPS ports.
  const httpPorts = [80, 8080, 8880, 2052, 2082, 2086, 2095]; // Standard cloudflare TCP/HTTP ports.

  let links = [];

  const isPagesDeployment = hostName.endsWith(".pages.dev");

  mainDomains.forEach((domain, i) => {
    links.push(
      buildLink({
        core,
        proto: "tls",
        userID,
        hostName,
        address: domain,
        port: pick(httpsPorts),
        tag: `D${i + 1}`,
      }),
    );

    if (!isPagesDeployment) {
      links.push(
        buildLink({
          core,
          proto: "tcp",
          userID,
          hostName,
          address: domain,
          port: pick(httpPorts),
          tag: `D${i + 1}`,
        }),
      );
    }
  });

  try {
    const r = await fetch(
      "https://raw.githubusercontent.com/NiREvil/vless/refs/heads/main/Cloudflare-IPs.json",
    );
    if (r.ok) {
      const json = await r.json();
      const ips = [...(json.ipv4 || []), ...(json.ipv6 || [])].slice(0, 20).map((x) => x.ip);
      ips.forEach((ip, i) => {
        const formattedAddress = ip.includes(":") ? `[${ip}]` : ip;
        links.push(
          buildLink({
            core,
            proto: "tls",
            userID,
            hostName,
            address: formattedAddress,
            port: pick(httpsPorts),
            tag: `IP${i + 1}`,
          }),
        );

        if (!isPagesDeployment) {
          links.push(
            buildLink({
              core,
              proto: "tcp",
              userID,
              hostName,
              address: formattedAddress,
              port: pick(httpPorts),
              tag: `IP${i + 1}`,
            }),
          );
        }
      });
    }
  } catch (e) {
    console.error("Fetch IP list failed", e);
  }

  // Creating cake information headers
  const GB_in_bytes = 1024 * 1024 * 1024;
  const TB_in_bytes = 1024 * GB_in_bytes;

  const total_bytes = CAKE_INFO.total_TB * TB_in_bytes;
  const base_bytes = CAKE_INFO.base_GB * GB_in_bytes;

  // Calculating "dynamic" consumption based on hours per day
  const now = new Date();
  const hours_passed = now.getHours() + now.getMinutes() / 60;
  const daily_growth_bytes = (hours_passed / 24) * (CAKE_INFO.daily_growth_GB * GB_in_bytes);

  // Splitting usage between upload and download
  const cake_download = base_bytes + daily_growth_bytes / 2;
  const cake_upload = base_bytes + daily_growth_bytes / 2;

  // Convert expiration date to Unix Timestamp
  const expire_timestamp = Math.floor(new Date(CAKE_INFO.expire_date).getTime() / 1000);
  const subInfo = `upload=${Math.round(cake_upload)}; download=${Math.round(cake_download)}; total=${total_bytes}; expire=${expire_timestamp}`;

  const headers = {
    "Content-Type": "text/plain;charset=utf-8",
    "Profile-Update-Interval": "6",
    "Subscription-Userinfo": subInfo,
  };

  if (subName) {
    headers["Profile-Title"] = subName;
  }

  return new Response(btoa(links.join("\n")), {
    headers: headers,
  });
}

export default {
  /**
   * @param {Request<any, CfProperties<any>>} request
   * @param {{ PROXYIP: string; UUID: any; SCAMALYTICS_USERNAME: any; SCAMALYTICS_API_KEY: any; SCAMALYTICS_BASEURL: any; SOCKS5: any; SOCKS5_RELAY: string; }} env
   * @param {any} ctx
   */
  async fetch(request, env, ctx) {
    const cfg = Config.fromEnv(env);
    const url = new URL(request.url);

    const upgradeHeader = request.headers.get("Upgrade");
    if (upgradeHeader && upgradeHeader.toLowerCase() === "websocket") {
      const requestConfig = {
        userID: cfg.userID,
        proxyIP: cfg.proxyIP,
        proxyPort: cfg.proxyPort,
        socks5Address: cfg.socks5.address,
        socks5Relay: cfg.socks5.relayMode,
        enableSocks: cfg.socks5.enabled,
        parsedSocks5Address: cfg.socks5.enabled ? socks5AddressParser(cfg.socks5.address) : {},
      };

      return ProtocolOverWSHandler(request, requestConfig);
    }

    if (url.pathname === "/scamalytics-lookup") return handleScamalyticsLookup(request, cfg);

    if (url.pathname.startsWith(`/xray/${cfg.userID}`))
      return handleIpSubscription(request, "xray", cfg.userID, url.hostname);

    if (url.pathname.startsWith(`/sb/${cfg.userID}`))
      return handleIpSubscription(request, "sb", cfg.userID, url.hostname);

    if (url.pathname.startsWith(`/${cfg.userID}`))
      return handleConfigPage(cfg.userID, url.hostname, cfg.proxyAddress);

    return new Response(
      "UUID not found. Please set the UUID environment variable in the Cloudflare dashboard.",
      { status: 404 },
    );
  },
};

/**
 * Performs Scamalytics IP lookup using API.
 * @param {Request} request
 * @param {object} config
 * @returns {Promise<Response>}
 */
async function handleScamalyticsLookup(request, config) {
  const url = new URL(request.url);
  const ipToLookup = url.searchParams.get("ip");
  if (!ipToLookup) {
    return new Response(JSON.stringify({ error: "Missing IP parameter" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { username, apiKey, baseUrl } = config.scamalytics;
  if (!username || !apiKey) {
    return new Response(JSON.stringify({ error: "Scamalytics API credentials not configured." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const scamalyticsUrl = `${baseUrl}${username}/?key=${apiKey}&ip=${ipToLookup}`;
  const headers = new Headers({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });

  try {
    const scamalyticsResponse = await fetch(scamalyticsUrl);
    const responseBody = await scamalyticsResponse.json();
    return new Response(JSON.stringify(responseBody), { headers });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.toString() }), {
      status: 500,
      headers,
    });
  }
}

/**
 * @param {any} userID
 * @param {string} hostName
 * @param {string} proxyAddress
 */
function handleConfigPage(userID, hostName, proxyAddress) {
  const html = generateBeautifulConfigPage(userID, hostName, proxyAddress);
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}

/**
 * @param {any} userID
 * @param {string} hostName
 * @param {string} proxyAddress
 */
function generateBeautifulConfigPage(userID, hostName, proxyAddress) {
  const dream = buildLink({
    core: "xray",
    proto: "tls",
    userID,
    hostName,
    address: hostName,
    port: 443,
    tag: `${hostName}-Xray`,
  });

  const freedom = buildLink({
    core: "sb",
    proto: "tls",
    userID,
    hostName,
    address: hostName,
    port: 443,
    tag: `${hostName}-Singbox`,
  });

  const subName = "INDEX";
  const configs = { dream, freedom };
  const encodedSubName = encodeURIComponent(subName);

  const subXrayUrl = `https://${hostName}/xray/${userID}?name=${encodedSubName}`;
  const subSbUrl = `https://${hostName}/sb/${userID}?name=${encodedSubName}`;

  const clientUrls = {
    clashMeta: `clash://install-config?url=${encodeURIComponent(`https://revil-sub.pages.dev/sub/clash-meta?url=${subSbUrl}&remote_config=&udp=false&ss_uot=false&show_host=false&forced_ws0rtt=true`)}&name=${encodedSubName}`,
    hiddify: `hiddify://install-config?url=${encodeURIComponent(subXrayUrl)}`,
    v2rayng: `v2rayng://install-config?url=${encodeURIComponent(subXrayUrl)}#${encodedSubName}`,
    exclave: `sn://subscription?url=${encodeURIComponent(subSbUrl)}&name=${encodedSubName}`,
  };

  let finalHTML = `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>VLESS Proxy Configuration</title>
    <link rel="icon" href="https://raw.githubusercontent.com/NiREvil/zizifn/refs/heads/Legacy/assets/raven-1.png" type="image/png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap" rel="stylesheet">
    <style>${getPageCSS()}</style> 
  </head>
  <body data-proxy-ip="${proxyAddress}">
    ${getPageHTML(configs, clientUrls)}
    <script>${getPageScript()}</script>
  </body>
  </html>`;

  return finalHTML;
}

/**
 * Core vless protocol logic
 * Handles VLESS protocol over WebSocket.
 * @param {Request} request
 * @param {object} config
 * @returns {Promise<Response>}
 */
async function ProtocolOverWSHandler(request, config) {
  const webSocketPair = new WebSocketPair();
  const [client, webSocket] = Object.values(webSocketPair);
  webSocket.accept();
  let address = "";
  let portWithRandomLog = "";
  let udpStreamWriter = null;
  const log = (/** @type {string} */ info, /** @type {undefined} */ event) => {
    console.log(`[${address}:${portWithRandomLog}] ${info}`, event || "");
  };
  const earlyDataHeader = request.headers.get("Sec-WebSocket-Protocol") || "";
  const readableWebSocketStream = MakeReadableWebSocketStream(webSocket, earlyDataHeader, log);
  let remoteSocketWapper = { value: null };
  let isDns = false;

  readableWebSocketStream
    .pipeTo(
      new WritableStream({
        async write(chunk, controller) {
          if (udpStreamWriter) {
            return udpStreamWriter.write(chunk);
          }

          if (remoteSocketWapper.value) {
            const writer = remoteSocketWapper.value.writable.getWriter();
            await writer.write(chunk);
            writer.releaseLock();
            return;
          }

          const {
            hasError,
            message,
            addressType,
            portRemote = 443,
            addressRemote = "",
            rawDataIndex,
            ProtocolVersion = new Uint8Array([0, 0]),
            isUDP,
          } = ProcessProtocolHeader(chunk, config.userID);

          address = addressRemote;
          portWithRandomLog = `${portRemote}--${Math.random()} ${isUDP ? "udp" : "tcp"} `;

          if (hasError) {
            throw new Error(message);
          }

          const vlessResponseHeader = new Uint8Array([ProtocolVersion[0], 0]);
          const rawClientData = chunk.slice(rawDataIndex);

          if (isUDP) {
            if (portRemote === 53) {
              const dnsPipeline = await createDnsPipeline(webSocket, vlessResponseHeader, log);
              udpStreamWriter = dnsPipeline.write;
              udpStreamWriter(rawClientData);
            } else {
              throw new Error("UDP proxy is only enabled for DNS (port 53)");
            }
            return;
          }

          HandleTCPOutBound(
            remoteSocketWapper,
            addressType,
            addressRemote,
            portRemote,
            rawClientData,
            webSocket,
            vlessResponseHeader,
            log,
            config,
          );
        },
        close() {
          log(`readableWebSocketStream closed`);
        },
        abort(err) {
          log(`readableWebSocketStream aborted`, err);
        },
      }),
    )
    .catch((err) => {
      console.error("Pipeline failed:", err.stack || err);
    });

  return new Response(null, { status: 101, webSocket: client });
}

/**
 * @param {string} uuid
 */
function isValidUUID(uuid) {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
}

/**
 * Helper function to randomize uppercase and lowercase letters in a string
 * @param {string} str Input string (like SNI)
 * @returns {string} String with random characters
 */
function randomizeCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    // 50% chance of making a big deal out of it.
    result += Math.random() < 0.5 ? str[i].toUpperCase() : str[i].toLowerCase();
  }
  return result;
}

/**
 * Handles TCP outbound logic for VLESS.
 * @param {{ value: any; }} remoteSocket
 * @param {number} addressType
 * @param {string} addressRemote
 * @param {number} portRemote
 * @param {any} rawClientData
 * @param {WebSocket} webSocket
 * @param {Uint8Array} protocolResponseHeader
 * @param {{ (info: any, event: any): void; (arg0: string): void; }} log
 * @param {{ socks5Relay: any; parsedSocks5Address: any; enableSocks: any; proxyIP: any; proxyPort: any; userID?: string; socks5Address?: string; }} config
 */
async function HandleTCPOutBound(
  remoteSocket,
  addressType,
  addressRemote,
  portRemote,
  rawClientData,
  webSocket,
  protocolResponseHeader,
  log,
  config,
) {
  if (!config) {
    config = {
      userID: "d342d11e-d424-4583-b36e-524ab1f0afa4",
      socks5Address: "",
      socks5Relay: false,
      proxyIP: "nima.nscl.ir",
      proxyPort: "443",
      enableSocks: false,
      parsedSocks5Address: {},
    };
  }

  /**
   * @param {string} address
   * @param {number} port
   */
  async function connectAndWrite(address, port, socks = false) {
    let tcpSocket;
    if (config.socks5Relay) {
      tcpSocket = await socks5Connect(addressType, address, port, log, config.parsedSocks5Address);
    } else {
      tcpSocket = socks
        ? await socks5Connect(addressType, address, port, log, config.parsedSocks5Address)
        : connect({ hostname: address, port: port });
    }
    remoteSocket.value = tcpSocket;
    log(`connected to ${address}:${port}`);
    const writer = tcpSocket.writable.getWriter();
    await writer.write(rawClientData);
    writer.releaseLock();
    return tcpSocket;
  }

  async function retry() {
    const tcpSocket = config.enableSocks
      ? await connectAndWrite(addressRemote, portRemote, true)
      : await connectAndWrite(
          config.proxyIP || addressRemote,
          config.proxyPort || portRemote,
          false,
        );

    tcpSocket.closed
      .catch((error) => {
        console.log("retry tcpSocket closed error", error);
      })
      .finally(() => {
        safeCloseWebSocket(webSocket);
      });
    RemoteSocketToWS(tcpSocket, webSocket, protocolResponseHeader, null, log);
  }

  const tcpSocket = await connectAndWrite(addressRemote, portRemote);
  RemoteSocketToWS(tcpSocket, webSocket, protocolResponseHeader, retry, log);
}

/**
 * Converts WebSocket messages to a readable stream.
 * @param {WebSocket} webSocketServer
 * @param {string} earlyDataHeader
 * @param {{ (info: any, event: any): void; (arg0: string): void; }} log
 */
function MakeReadableWebSocketStream(webSocketServer, earlyDataHeader, log) {
  return new ReadableStream({
    start(controller) {
      webSocketServer.addEventListener("message", (/** @type {{ data: any; }} */ event) =>
        controller.enqueue(event.data),
      );
      webSocketServer.addEventListener("close", () => {
        safeCloseWebSocket(webSocketServer);
        controller.close();
      });
      webSocketServer.addEventListener("error", (/** @type {any} */ err) => {
        log("webSocketServer has error");
        controller.error(err);
      });
      const { earlyData, error } = base64ToArrayBuffer(earlyDataHeader);
      if (error) controller.error(error);
      else if (earlyData) controller.enqueue(earlyData);
    },
    pull(_controller) {},
    cancel(reason) {
      log(`ReadableStream was canceled, due to ${reason}`);
      safeCloseWebSocket(webSocketServer);
    },
  });
}

/**
 * Parses and validates VLESS protocol header.
 * @param {ArrayBufferLike & { BYTES_PER_ELEMENT?: never; }} protocolBuffer
 * @param {string} userID
 */
function ProcessProtocolHeader(protocolBuffer, userID) {
  if (protocolBuffer.byteLength < 24) return { hasError: true, message: "invalid data" };

  const dataView = new DataView(protocolBuffer);
  const version = dataView.getUint8(0);
  const slicedBufferString = stringify(new Uint8Array(protocolBuffer.slice(1, 17)));
  const uuids = userID.split(",").map((/** @type {string} */ id) => id.trim());
  const isValidUser = uuids.some((/** @type {string} */ uuid) => slicedBufferString === uuid);

  if (!isValidUser) return { hasError: true, message: "invalid user" };

  const optLength = dataView.getUint8(17);
  const command = dataView.getUint8(18 + optLength);
  if (command !== 1 && command !== 2)
    return { hasError: true, message: `command ${command} is not supported` };

  const portIndex = 18 + optLength + 1;
  const portRemote = dataView.getUint16(portIndex);
  const addressType = dataView.getUint8(portIndex + 2);
  let addressValue, addressLength, addressValueIndex;

  switch (addressType) {
    case 1: // IPv4
      addressLength = 4;
      addressValueIndex = portIndex + 3;
      addressValue = new Uint8Array(
        protocolBuffer.slice(addressValueIndex, addressValueIndex + addressLength),
      ).join(".");
      break;
    case 2: // Domain
      addressLength = dataView.getUint8(portIndex + 3);
      addressValueIndex = portIndex + 4;
      addressValue = new TextDecoder().decode(
        protocolBuffer.slice(addressValueIndex, addressValueIndex + addressLength),
      );
      break;
    case 3: // IPv6
      addressLength = 16;
      addressValueIndex = portIndex + 3;
      addressValue = Array.from({ length: 8 }, (_, i) =>
        dataView.getUint16(addressValueIndex + i * 2).toString(16),
      ).join(":");
      break;
    default:
      return { hasError: true, message: `invalid addressType: ${addressType}` };
  }

  if (!addressValue)
    return { hasError: true, message: `addressValue is empty, addressType is ${addressType}` };

  return {
    hasError: false,
    addressRemote: addressValue,
    addressType,
    portRemote,
    rawDataIndex: addressValueIndex + addressLength,
    ProtocolVersion: new Uint8Array([version]),
    isUDP: command === 2,
  };
}

/**
 * Pipes remote socket data to WebSocket.
 * @param {Socket} remoteSocket
 * @param {WebSocket} webSocket
 * @param {string | Uint8Array | ArrayBuffer | ArrayBufferView | Blob} protocolResponseHeader
 * @param {{ (): Promise<void>; (): any; }} retry
 * @param {{ (info: any, event: any): void; (arg0: string): void; (info: any, event: any): void; (arg0: string): void; (arg0: string): void; }} log
 */
async function RemoteSocketToWS(remoteSocket, webSocket, protocolResponseHeader, retry, log) {
  let hasIncomingData = false;
  try {
    await remoteSocket.readable.pipeTo(
      new WritableStream({
        async write(chunk) {
          if (webSocket.readyState !== CONST.WS_READY_STATE_OPEN)
            throw new Error("WebSocket is not open");
          hasIncomingData = true;
          const dataToSend = protocolResponseHeader
            ? await new Blob([protocolResponseHeader, chunk]).arrayBuffer()
            : chunk;
          webSocket.send(dataToSend);
          protocolResponseHeader = null;
        },
        close() {
          log(`Remote connection readable closed. Had incoming data: ${hasIncomingData}`);
        },
        abort(reason) {
          console.error(`Remote connection readable aborted:`, reason);
        },
      }),
    );
  } catch (error) {
    console.error(`RemoteSocketToWS error:`, error.stack || error);
    safeCloseWebSocket(webSocket);
  }
  if (!hasIncomingData && retry) {
    log(`No incoming data, retrying`);
    await retry();
  }
}

/**
 * decodes base64 string to ArrayBuffer.
 * @param {string} base64Str
 */
function base64ToArrayBuffer(base64Str) {
  if (!base64Str) return { earlyData: null, error: null };
  try {
    const binaryStr = atob(base64Str.replace(/-/g, "+").replace(/_/g, "/"));
    const buffer = new ArrayBuffer(binaryStr.length);
    const view = new Uint8Array(buffer);
    for (let i = 0; i < binaryStr.length; i++) {
      view[i] = binaryStr.charCodeAt(i);
    }
    return { earlyData: buffer, error: null };
  } catch (error) {
    return { earlyData: null, error };
  }
}

/**
 * Safely closes a WebSocket connection.
 * @param {{ readyState: number; close: () => void; }} socket
 */
function safeCloseWebSocket(socket) {
  try {
    if (
      socket.readyState === CONST.WS_READY_STATE_OPEN ||
      socket.readyState === CONST.WS_READY_STATE_CLOSING
    ) {
      socket.close();
    }
  } catch (error) {
    console.error("safeCloseWebSocket error:", error);
  }
}

const byteToHex = Array.from({ length: 256 }, (_, i) => (i + 0x100).toString(16).slice(1));

/*
 * @param {Uint8Array | (string | number)[]} arr
 */
function unsafeStringify(arr, offset = 0) {
  return (
    byteToHex[arr[offset]] +
    byteToHex[arr[offset + 1]] +
    byteToHex[arr[offset + 2]] +
    byteToHex[arr[offset + 3]] +
    "-" +
    byteToHex[arr[offset + 4]] +
    byteToHex[arr[offset + 5]] +
    "-" +
    byteToHex[arr[offset + 6]] +
    byteToHex[arr[offset + 7]] +
    "-" +
    byteToHex[arr[offset + 8]] +
    byteToHex[arr[offset + 9]] +
    "-" +
    byteToHex[arr[offset + 10]] +
    byteToHex[arr[offset + 11]] +
    byteToHex[arr[offset + 12]] +
    byteToHex[arr[offset + 13]] +
    byteToHex[arr[offset + 14]] +
    byteToHex[arr[offset + 15]]
  ).toLowerCase();
}

/*
 * @param {Uint8Array} arr
 */
function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset);
  if (!isValidUUID(uuid)) throw new TypeError("Stringified UUID is invalid");
  return uuid;
}

/**
 * DNS pipeline for UDP DNS requests, using DNS-over-HTTPS, (REvil Method).
 * @param {WebSocket} webSocket
 * @param {Uint8Array} vlessResponseHeader
 * @param {Function} log
 * @returns {Promise<{write: Function}>}
 */
async function createDnsPipeline(webSocket, vlessResponseHeader, log) {
  let isHeaderSent = false;
  const transformStream = new TransformStream({
    transform(chunk, controller) {
      // Parse UDP packets from VLESS framing
      for (let index = 0; index < chunk.byteLength; ) {
        const lengthBuffer = chunk.slice(index, index + 2);
        const udpPacketLength = new DataView(lengthBuffer).getUint16(0);
        const udpData = new Uint8Array(chunk.slice(index + 2, index + 2 + udpPacketLength));
        index = index + 2 + udpPacketLength;
        controller.enqueue(udpData);
      }
    },
  });

  transformStream.readable
    .pipeTo(
      new WritableStream({
        async write(chunk) {
          try {
            // Send DNS query using DoH
            const resp = await fetch(`https://1.1.1.1/dns-query`, {
              method: "POST",
              headers: { "content-type": "application/dns-message" },
              body: chunk,
            });
            const dnsQueryResult = await resp.arrayBuffer();
            const udpSize = dnsQueryResult.byteLength;
            const udpSizeBuffer = new Uint8Array([(udpSize >> 8) & 0xff, udpSize & 0xff]);

            if (webSocket.readyState === CONST.WS_READY_STATE_OPEN) {
              log(`DNS query successful, length: ${udpSize}`);
              if (isHeaderSent) {
                webSocket.send(await new Blob([udpSizeBuffer, dnsQueryResult]).arrayBuffer());
              } else {
                webSocket.send(
                  await new Blob([
                    vlessResponseHeader,
                    udpSizeBuffer,
                    dnsQueryResult,
                  ]).arrayBuffer(),
                );
                isHeaderSent = true;
              }
            }
          } catch (error) {
            log("DNS query error: " + error);
          }
        },
      }),
    )
    .catch((e) => {
      log("DNS stream error: " + e);
    });

  const writer = transformStream.writable.getWriter();
  return {
    write: (/** @type {any} */ chunk) => writer.write(chunk),
  };
}

/**
 * SOCKS5 TCP connection logic.
 * @param {any} addressType
 * @param {string} addressRemote
 * @param {number} portRemote
 * @param {any} log
 * @param {{ username: any; password: any; hostname: any; port: any; }} parsedSocks5Addr
 */
async function socks5Connect(addressType, addressRemote, portRemote, log, parsedSocks5Addr) {
  const { username, password, hostname, port } = parsedSocks5Addr;
  const socket = connect({ hostname, port });
  const writer = socket.writable.getWriter();
  const reader = socket.readable.getReader();
  const encoder = new TextEncoder();

  await writer.write(new Uint8Array([5, 2, 0, 2])); // SOCKS5 greeting
  let res = (await reader.read()).value;
  if (res[0] !== 0x05 || res[1] === 0xff) throw new Error("SOCKS5 server connection failed.");

  if (res[1] === 0x02) {
    // Auth required
    if (!username || !password) throw new Error("SOCKS5 auth credentials not provided.");
    const authRequest = new Uint8Array([
      1,
      username.length,
      ...encoder.encode(username),
      password.length,
      ...encoder.encode(password),
    ]);
    await writer.write(authRequest);
    res = (await reader.read()).value;
    if (res[0] !== 0x01 || res[1] !== 0x00) throw new Error("SOCKS5 authentication failed.");
  }

  let DSTADDR;
  switch (addressType) {
    case 1:
      DSTADDR = new Uint8Array([1, ...addressRemote.split(".").map(Number)]);
      break;
    case 2:
      DSTADDR = new Uint8Array([3, addressRemote.length, ...encoder.encode(addressRemote)]);
      break;
    case 3:
      DSTADDR = new Uint8Array([
        4,
        ...addressRemote
          .split(":")
          .flatMap((/** @type {string} */ x) => [
            parseInt(x.slice(0, 2), 16),
            parseInt(x.slice(2), 16),
          ]),
      ]);
      break;
    default:
      throw new Error(`Invalid addressType for SOCKS5: ${addressType}`);
  }

  const socksRequest = new Uint8Array([5, 1, 0, ...DSTADDR, portRemote >> 8, portRemote & 0xff]);
  await writer.write(socksRequest);
  res = (await reader.read()).value;
  if (res[1] !== 0x00) throw new Error("Failed to open SOCKS5 connection.");

  writer.releaseLock();
  reader.releaseLock();
  return socket;
}

/**
 * Parses SOCKS5 address string.
 * @param {string} address
 * @returns {object}
 */
function socks5AddressParser(address) {
  try {
    const [authPart, hostPart] = address.includes("@") ? address.split("@") : [null, address];
    const [hostname, portStr] = hostPart.split(":");
    const port = parseInt(portStr, 10);
    if (!hostname || isNaN(port)) throw new Error();

    let username, password;
    if (authPart) {
      [username, password] = authPart.split(":");
      if (!username) throw new Error();
    }
    return { username, password, hostname, port };
  } catch {
    throw new Error("Invalid SOCKS5 address format. Expected [user:pass@]host:port");
  }
}

/**
 * @returns {string} CSS content of the page.
 */
function getPageCSS() {
  return `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  @font-face {
    font-family: "Aldine 401 BT Web";
    src: url("https://pub-7a3b428c76aa411181a0f4dd7fa9064b.r2.dev/Aldine401_Mersedeh.woff2") format("woff2");
    font-weight: 400; font-style: normal; font-display: swap;
  }
  @font-face {
    font-family: "Styrene B LC";
    src: url("https://pub-7a3b428c76aa411181a0f4dd7fa9064b.r2.dev/StyreneBLC-Regular.woff2") format("woff2");
    font-weight: 400; font-style: normal; font-display: swap;
  }
  @font-face {
    font-family: "Styrene B LC";
    src: url("https://pub-7a3b428c76aa411181a0f4dd7fa9064b.r2.dev/StyreneBLC-Medium.woff2") format("woff2");
    font-weight: 500; font-style: normal; font-display: swap;
  }

  :root {
    --background-primary: #2a2421; --background-secondary: #35302c; --background-tertiary: #413b35;
    --border-color: #5a4f45; --border-color-hover: #766a5f; --text-primary: #e5dfd6; --text-secondary: #b3a89d;
    --text-accent: #ffffff; --accent-primary: #be9b7b; --accent-secondary: #d4b595; --accent-tertiary: #8d6e5c;
    --accent-primary-darker: #8a6f56; --button-text-primary: #2a2421; --button-text-secondary: var(--text-primary);
    --shadow-color: rgba(0, 0, 0, 0.35); --shadow-color-accent: rgba(190, 155, 123, 0.4);
    --border-radius: 8px; --transition-speed: 0.2s; --transition-speed-fast: 0.1s; --transition-speed-medium: 0.3s; --transition-speed-long: 0.6s;
    --status-success: #70b570; --status-error: #e05d44; --status-warning: #e0bc44; --status-info: #4f90c4;
    --serif: "Aldine 401 BT Web", "Times New Roman", Times, Georgia, ui-serif, serif;
    --sans-serif: "Styrene B LC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Noto Color Emoji", sans-serif;
    --mono-serif: "Fira Code", Cantarell, "Courier Prime", monospace;
  }

  body {
    font-family: var(--sans-serif); font-size: 16px; font-weight: 400; font-style: normal;
    background-color: var(--background-primary); color: var(--text-primary);
    padding: 3rem; line-height: 1.5; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
  }

  .container {
    max-width: 800px; margin: 20px auto; padding: 0 12px; border-radius: var(--border-radius);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2), 0 0 25px 8px var(--shadow-color-accent);
    transition: box-shadow var(--transition-speed-medium) ease;
  }

  .container:hover { box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25), 0 0 35px 10px var(--shadow-color-accent); }
  .header { text-align: center; margin-bottom: 40px; padding-top: 30px; }
  .header h1 { font-family: var(--serif); font-weight: 400; font-size: 2rem; color: var(--text-accent); margin-top: 0px; margin-bottom: 2px; }
  .header p { color: var(--text-secondary); font-size: 0.8rem; font-weight: 400; }
  .config-card {
    background: var(--background-secondary); border-radius: var(--border-radius); padding: 20px; margin-bottom: 24px;
    border: 1px solid var(--border-color);
    transition: border-color var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
  }

  .config-card:hover { border-color: var(--border-color-hover); box-shadow: 0 4px 8px var(--shadow-color); }
  .config-title {
    font-family: var(--serif); font-size: 1.4rem; font-weight: 400; color: var(--accent-secondary);
    margin-bottom: 16px; padding-bottom: 13px; border-bottom: 1px solid var(--border-color);
    display: flex; align-items: center; justify-content: space-between;
  }

  .config-title .refresh-btn {
    position: relative; overflow: hidden; display: flex; align-items: center; gap: 4px;
    font-family: var(--serif); font-size: 12px; padding: 6px 12px; border-radius: 6px;
    color: var(--accent-secondary); background-color: var(--background-tertiary); border: 1px solid var(--border-color);
    cursor: pointer;
    transition: background-color var(--transition-speed) ease, border-color var(--transition-speed) ease, color var(--transition-speed) ease, transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
  }

  .config-title .refresh-btn::before {
    content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%); transition: transform var(--transition-speed-long) ease; z-index: 1;
  }

  .config-title .refresh-btn:hover {
    letter-spacing: 0.5px; font-weight: 600; background-color: #4d453e; color: var(--accent-primary);
    border-color: var(--border-color-hover); transform: translateY(-2px); box-shadow: 0 4px 8px var(--shadow-color);
  }

  .config-title .refresh-btn:hover::before { transform: translateX(100%); }
  .config-title .refresh-btn:active { transform: translateY(0px) scale(0.98); box-shadow: none; }
  .refresh-icon { width: 12px; height: 12px; stroke: currentColor; }
  .config-content {
    position: relative; background: var(--background-tertiary); border-radius: var(--border-radius);
    padding: 16px; margin-bottom: 20px; border: 1px solid var(--border-color);
  }

  .config-content pre {
    overflow-x: auto; font-family: var(--mono-serif); font-size: 12px; color: var(--text-primary);
    margin: 0; white-space: pre-wrap; word-break: break-all;
  }

  .button {
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    padding: 8px 16px; border-radius: var(--border-radius); font-size: 15px; font-weight: 500;
    cursor: pointer; border: 1px solid var(--border-color); background-color: var(--background-tertiary);
    color: var(--button-text-secondary);
    transition: background-color var(--transition-speed) ease, border-color var(--transition-speed) ease, color var(--transition-speed) ease, transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
    -webkit-tap-highlight-color: transparent; touch-action: manipulation; text-decoration: none; overflow: hidden; z-index: 1;
  }

  .button:focus-visible { outline: 2px solid var(--accent-primary); outline-offset: 2px; }
  .button:disabled { opacity: 0.6; cursor: not-allowed; transform: none; box-shadow: none; transition: opacity var(--transition-speed) ease; }
  .copy-buttons {
    position: relative; display: flex; gap: 4px; overflow: hidden; align-self: center;
    font-family: var(--serif); font-size: 13px; padding: 6px 12px; border-radius: 6px;
    color: var(--accent-secondary); border: 1px solid var(--border-color);
    transition: background-color var(--transition-speed) ease, border-color var(--transition-speed) ease, color var(--transition-speed) ease, transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
  }

  .copy-buttons::before, .client-btn::before {
    content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%); transition: transform var(--transition-speed-long) ease; z-index: -1;
  }

  .copy-buttons:hover::before, .client-btn:hover::before { transform: translateX(100%); }
  .copy-buttons:hover {
    background-color: #4d453e; letter-spacing: 0.5px; font-weight: 600;
    border-color: var(--border-color-hover); transform: translateY(-2px); box-shadow: 0 4px 8px var(--shadow-color);
  }

  .copy-buttons:active { transform: translateY(0px) scale(0.98); box-shadow: none; }
  .copy-icon { width: 12px; height: 12px; stroke: currentColor; }
  .client-buttons { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 12px; margin-top: 16px; }
  .client-btn {
    width: 100%; background-color: var(--accent-primary); color: var(--background-tertiary);
    border-radius: 6px; border-color: var(--accent-primary-darker); position: relative; overflow: hidden;
    transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1); box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }

  .client-btn::after {
    content: ''; position: absolute; bottom: -5px; left: 0; width: 100%; height: 5px;
    background: linear-gradient(90deg, var(--accent-tertiary), var(--accent-secondary));
    opacity: 0; transition: all 0.3s ease; z-index: 0;
  }

  .client-btn:hover {
    text-transform: uppercase; letter-spacing: 0.3px; transform: translateY(-3px);
    background-color: var(--accent-secondary); color: var(--button-text-primary);
    box-shadow: 0 5px 15px rgba(190, 155, 123, 0.5); border-color: var(--accent-secondary);
  }

  .client-btn:hover::after { opacity: 1; bottom: 0; }
  .client-btn:active { transform: translateY(0) scale(0.98); box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2); background-color: var(--accent-primary-darker); }
  .client-btn .client-icon { position: relative; z-index: 2; transition: transform 0.3s ease; }
  .client-btn:hover .client-icon { transform: rotate(15deg) scale(1.1); }
  .client-btn .button-text { position: relative; z-index: 2; transition: letter-spacing 0.3s ease; }
  .client-btn:hover .button-text { letter-spacing: 0.5px; }
  .client-icon { width: 18px; height: 18px; border-radius: 6px; background-color: var(--background-secondary); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .client-icon svg { width: 14px; height: 14px; fill: var(--accent-secondary); }
  .button.copied { background-color: var(--accent-secondary) !important; color: var(--background-tertiary) !important; }
  .button.error { background-color: #c74a3b !important; color: var(--text-accent) !important; }

  .footer { text-align: center; margin-top: 20px; padding-bottom: 40px; color: var(--text-secondary); font-size: 12px; }
  .footer p { margin-bottom: 0px; }

  ::-webkit-scrollbar { width: 8px; height: 8px; }
  ::-webkit-scrollbar-track { background: var(--background-primary); border-radius: 4px; }
  ::-webkit-scrollbar-thumb { background: var(--border-color); border-radius: 4px; border: 2px solid var(--background-primary); }
  ::-webkit-scrollbar-thumb:hover { background: var(--border-color-hover); }
  * { scrollbar-width: thin; scrollbar-color: var(--border-color) var(--background-primary); }

  .ip-info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 24px; }
  .ip-info-section { background-color: var(--background-tertiary); border-radius: var(--border-radius); padding: 16px; border: 1px solid var(--border-color); display: flex; flex-direction: column; gap: 20px; }
  .ip-info-header { display: flex; align-items: center; gap: 10px; border-bottom: 1px solid var(--border-color); padding-bottom: 10px; }
  .ip-info-header svg { width: 20px; height: 20px; stroke: var(--accent-secondary); }
  .ip-info-header h3 { font-family: var(--serif); font-size: 18px; font-weight: 400; color: var(--accent-secondary); margin: 0; }
  .ip-info-content { display: flex; flex-direction: column; gap: 10px; }
  .ip-info-item { display: flex; flex-direction: column; gap: 2px; }
  .ip-info-item .label { font-size: 11px; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px; }
  .ip-info-item .value { font-size: 14px; color: var(--text-primary); word-break: break-all; line-height: 1.4; }

  .badge { display: inline-flex; align-items: center; justify-content: center; padding: 3px 8px; border-radius: 12px; font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; }
  .badge-yes { background-color: rgba(112, 181, 112, 0.15); color: var(--status-success); border: 1px solid rgba(112, 181, 112, 0.3); }
  .badge-no { background-color: rgba(224, 93, 68, 0.15); color: var(--status-error); border: 1px solid rgba(224, 93, 68, 0.3); }
  .badge-neutral { background-color: rgba(79, 144, 196, 0.15); color: var(--status-info); border: 1px solid rgba(79, 144, 196, 0.3); }
  .badge-warning { background-color: rgba(224, 188, 68, 0.15); color: var(--status-warning); border: 1px solid rgba(224, 188, 68, 0.3); }
  .skeleton { display: block; background: linear-gradient(90deg, var(--background-tertiary) 25%, var(--background-secondary) 50%, var(--background-tertiary) 75%); background-size: 200% 100%; animation: loading 1.5s infinite; border-radius: 4px; height: 16px; }
  @keyframes loading { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
  .country-flag { display: inline-block; width: 18px; height: auto; max-height: 14px; margin-right: 6px; vertical-align: middle; border-radius: 2px; }

  .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.7); display: flex; align-items: center; justify-content: center; z-index: 1000; opacity: 0; visibility: hidden; transition: opacity 0.3s ease, visibility 0.3s ease; }
  .modal-overlay.visible { opacity: 1; visibility: visible; }
  .modal-overlay.visible { opacity: 1; visibility: visible; }
  .modal-content { background: var(--background-secondary); padding: 24px; border-radius: var(--border-radius); border: 1px solid var(--border-color); width: 90%; max-width: 450px; text-align: center; box-shadow: 0 8px 30px var(--shadow-color-accent); transform: scale(0.95); transition: transform 0.3s ease; }
  .modal-overlay.visible .modal-content { transform: scale(1); }
  .modal-title { font-family: var(--serif); font-size: 1.5rem; color: var(--accent-secondary); margin-bottom: 16px; }
  .modal-text { color: var(--text-primary); font-size: 14px; line-height: 1.6; margin-bottom: 20px; }
  .modal-instruction { background: var(--background-tertiary); padding: 12px; border-radius: 6px; margin-bottom: 24px; font-size: 13px; line-height: 1.8; border: 1px solid var(--border-color); }
  .modal-instruction code { background: var(--background-primary); color: var(--accent-primary); padding: 3px 6px; border-radius: 4px; font-family: var(--mono-serif); }
  #hiddify-modal-continue { width: 100%;}

  @media (max-width: 768px) {
    body { padding: 20px; } .container { padding: 0 14px; width: min(100%, 768px); }
    .ip-info-grid { grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 18px; }
    .header h1 { font-size: 1.8rem; } .header p { font-size: 0.7rem }
    .ip-info-section { padding: 14px; gap: 18px; } .ip-info-header h3 { font-size: 16px; }
    .ip-info-header { gap: 8px; } .ip-info-content { gap: 8px; }
    .ip-info-item .label { font-size: 11px; } .ip-info-item .value { font-size: 13px; }
    .config-card { padding: 16px; } .config-title { font-size: 18px; }
    .config-title .refresh-btn { font-size: 11px; } .config-content pre { font-size: 12px; }
    .client-buttons { grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); }
    .button { font-size: 12px; } .copy-buttons { font-size: 11px; }
  }

  @media (max-width: 480px) {
    body { padding: 16px; } .container { padding: 0 12px; width: min(100%, 390px); }
    .header h1 { font-size: 20px; } .header p { font-size: 8px; }
    .ip-info-section { padding: 14px; gap: 16px; }
    .ip-info-grid { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }
    .ip-info-header h3 { font-size: 14px; } .ip-info-header { gap: 6px; }
    .ip-info-content { gap: 6px; } .ip-info-header svg { width: 18px; height: 18px; }
    .ip-info-item .label { font-size: 9px; } .ip-info-item .value { font-size: 11px; }
    .badge { padding: 2px 6px; font-size: 10px; border-radius: 10px; }
    .config-card { padding: 10px; } .config-title { font-size: 16px; }
    .config-title .refresh-btn { font-size: 10px; } .config-content { padding: 12px; }
    .config-content pre { font-size: 10px; }
    .client-buttons { grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); }
    .button { padding: 4px 8px; font-size: 11px; } .copy-buttons { font-size: 10px; }
    .footer { font-size: 10px; }
  }

  @media (max-width: 359px) {
    body { padding: 12px; font-size: 14px; } .container { max-width: 100%; padding: 8px; }
    .header h1 { font-size: 16px; } .header p { font-size: 6px; }
    .ip-info-section { padding: 12px; gap: 12px; }
    .ip-info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; }
    .ip-info-header h3 { font-size: 13px; } .ip-info-header { gap: 4px; } .ip-info-content { gap: 4px; }
    .ip-info-header svg { width: 16px; height: 16px; } .ip-info-item .label { font-size: 8px; }
    .ip-info-item .value { font-size: 10px; } .badge { padding: 1px 4px; font-size: 9px; border-radius: 8px; }
    .config-card { padding: 8px; } .config-title { font-size: 13px; } .config-title .refresh-btn { font-size: 9px; }
    .config-content { padding: 8px; } .config-content pre { font-size: 8px; }
    .client-buttons { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); }
    .button { padding: 3px 6px; font-size: 10px; } .copy-buttons { font-size: 9px; } .footer { font-size: 8px; }
  }
    @media (min-width: 360px) { .container { max-width: 95%; } }
    @media (min-width: 480px) { .container { max-width: 90%; } }
    @media (min-width: 640px) { .container { max-width: 600px; } }
    @media (min-width: 768px) { .container { max-width: 720px; } }
    @media (min-width: 1024px) { .container { max-width: 800px; } }
  `;
}

/**
 * @param {object} configs - Object containing configuration links.
 * @param {object} clientUrls - Object containing client URLs.
 * @returns {string} The HTML body content of the page.
 */
function getPageHTML(configs, clientUrls) {
  return `
    <div class="container">
    <div class="header">
      <h1>VLESS Proxy Configuration</h1>
      <p>Copy the configuration or import directly into your client</p>
    </div>

    <div class="config-card">
      <div class="config-title">
        <span>Network Information</span>
        <button id="refresh-ip-info" class="refresh-btn" aria-label="Refresh IP information">
          <svg
            class="refresh-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"
            />
          </svg>
          Refresh
        </button>
      </div>
      <div class="ip-info-grid">
        <div class="ip-info-section">
          <div class="ip-info-header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v16.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h6.9c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V3.6c0-.4-.2-.8-.5-1.1-.3-.3-.7-.5-1.1-.5z"
              />
              <circle cx="12" cy="18" r="1" />
            </svg>
            <h3>Proxy Server</h3>
          </div>
          <div class="ip-info-content">
            <div class="ip-info-item">
              <span class="label">Proxy Host</span
              ><span class="value" id="proxy-host"
                ><span class="skeleton" style="width: 150px"></span
              ></span>
            </div>
            <div class="ip-info-item">
              <span class="label">IP Address</span
              ><span class="value" id="proxy-ip"
                ><span class="skeleton" style="width: 120px"></span
              ></span>
            </div>
            <div class="ip-info-item">
              <span class="label">Location</span
              ><span class="value" id="proxy-location"
                ><span class="skeleton" style="width: 100px"></span
              ></span>
            </div>
            <div class="ip-info-item">
              <span class="label">ISP Provider</span
              ><span class="value" id="proxy-isp"
                ><span class="skeleton" style="width: 140px"></span
              ></span>
            </div>
          </div>
        </div>
        <div class="ip-info-section">
          <div class="ip-info-header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"
              />
            </svg>
            <h3>Your Connection</h3>
          </div>
          <div class="ip-info-content">
            <div class="ip-info-item">
              <span class="label">Your IP</span
              ><span class="value" id="client-ip"
                ><span class="skeleton" style="width: 110px"></span
              ></span>
            </div>
            <div class="ip-info-item">
              <span class="label">Location</span
              ><span class="value" id="client-location"
                ><span class="skeleton" style="width: 90px"></span
              ></span>
            </div>
            <div class="ip-info-item">
              <span class="label">ISP Provider</span
              ><span class="value" id="client-isp"
                ><span class="skeleton" style="width: 130px"></span
              ></span>
            </div>
            <div class="ip-info-item">
              <span class="label">Risk Score</span
              ><span class="value" id="client-proxy"
                ><span class="skeleton" style="width: 100px"></span
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="config-card">
      <div class="config-title">
        <span>Xray Core Clients</span>
        <button class="button copy-buttons" onclick="copyToClipboard(this, '${configs.dream}')">
          <svg
            class="copy-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          Copy
        </button>
      </div>
      <div class="config-content"><pre id="xray-config">${configs.dream}</pre></div>
      <div class="client-buttons">
        <a href="${clientUrls.hiddify}" id="hiddify-import-btn" class="button client-btn">
          <span class="client-icon"
            ><svg viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg
          ></span>
          <span class="button-text">Import to Hiddify</span>
        </a>
        <a href="${clientUrls.v2rayng}" class="button client-btn">
          <span class="client-icon"
            ><svg viewBox="0 0 24 24">
              <path d="M12 2L4 5v6c0 5.5 3.5 10.7 8 12.3 4.5-1.6 8-6.8 8-12.3V5l-8-3z" /></svg
          ></span>
          <span class="button-text">Import to V2rayNG</span>
        </a>
      </div>
    </div>

    <div class="config-card">
      <div class="config-title">
        <span>Sing-Box Core Clients</span>
        <button class="button copy-buttons" onclick="copyToClipboard(this, '${configs.freedom}')">
          <svg
            class="copy-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          Copy
        </button>
      </div>
      <div class="config-content"><pre id="singbox-config">${configs.freedom}</pre></div>
      <div class="client-buttons">
        <a href="${clientUrls.clashMeta}" class="button client-btn">
          <span class="client-icon"
            ><svg viewBox="0 0 24 24">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
              /></svg
          ></span>
          <span class="button-text">Import to Clash Meta</span>
        </a>
        <a href="${clientUrls.exclave}" class="button client-btn">
          <span class="client-icon"
            ><svg viewBox="0 0 24 24">
              <path
                d="M20,8h-3V6c0-1.1-0.9-2-2-2H9C7.9,4,7,4.9,7,6v2H4C2.9,8,2,8.9,2,10v9c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-9 C22,8.9,21.1,8,20,8z M9,6h6v2H9V6z M20,19H4v-2h16V19z M20,15H4v-5h3v1c0,0.55,0.45,1,1,1h1.5c0.28,0,0.5-0.22,0.5-0.5v-0.5h4v0.5 c0,0.28,0.22,0.5,0.5,0.5H16c0.55,0,1-0.45,1-1v-1h3V15z"
              />
              <circle cx="8.5" cy="13.5" r="1" />
              <circle cx="15.5" cy="13.5" r="1" />
              <path d="M12,15.5c-0.55,0-1-0.45-1-1h2C13,15.05,12.55,15.5,12,15.5z" /></svg
          ></span>
          <span class="button-text">Import to Exclave</span>
        </a>
      </div>
    </div>

    <div class="footer">
      <p>
        © <span id="current-year">${new Date().getFullYear()}</span> REvil - All Rights Reserved
      </p>
      <p>Secure. Private. Fast.</p>
    </div>
  </div>

  <div id="hiddify-dns-modal" class="modal-overlay" style="display: none">
    <div class="modal-content">
      <h3 class="modal-title">Important Note for Hiddify Users</h3>
      <p class="modal-text">
        For the configuration to work correctly, you need to change the
        <strong>Remote DNS</strong> setting in the Hiddify app.
      </p>
      <div class="modal-instruction">
        Change from: <code>udp://1.1.1.1</code><br />
        To: <code>https://8.8.8.8/dns-query</code>
      </div>
      <button id="hiddify-modal-continue" class="button client-btn">Continue to Hiddify</button>
    </div>
  </div>
  `;
}

/**
 * @returns {string} Client-side JavaScript
 * This function is self-contained and doesn't need template literals from the server.
 * Using a template literal here is just for multi-line string formatting.
 */
function getPageScript() {
  return `
      function copyToClipboard(button, text) {
        const originalHTML = button.innerHTML;
        navigator.clipboard.writeText(text).then(() => {
          button.innerHTML = \`<svg class="copy-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copied!\`;
          button.classList.add("copied");
          button.disabled = true;
          setTimeout(() => {
            button.innerHTML = originalHTML;
            button.classList.remove("copied");
            button.disabled = false;
          }, 1200);
        }).catch(err => {
          console.error("Failed to copy text: ", err);
        });
      }

      async function fetchClientPublicIP() {
        try {
          const response = await fetch('https://api.ipify.org?format=json');
          if (!response.ok) throw new Error(\`HTTP error! status: \${response.status}\`);
          return (await response.json()).ip;
        } catch (error) {
          console.error('Error fetching client IP:', error);
          return null;
        }
      }

      async function fetchScamalyticsClientInfo(clientIp) {
        if (!clientIp) return null;
        try {
          const response = await fetch(\`/scamalytics-lookup?ip=\${encodeURIComponent(clientIp)}\`);
          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(\`Worker request failed! status: \${response.status}, details: \${errorText}\`);
          }
          const data = await response.json();
          if (data.scamalytics && data.scamalytics.status === 'error') {
              throw new Error(data.scamalytics.error || 'Scamalytics API error via Worker');
          }
          return data;
        } catch (error) {
          console.error('Error fetching from Scamalytics via Worker:', error);
          return null;
        }
      }

      // Extract information from IP databases
      function updateScamalyticsClientDisplay(data) {
        const prefix = 'client';
        if (!data || !data.scamalytics || data.scamalytics.status !== 'ok') {
          showError(prefix, (data && data.scamalytics && data.scamalytics.error) || 'Could not load client data from Scamalytics');
          return;
        }

        const sa = data.scamalytics;
        const ext = data.external_datasources || {};

        // Alternative sources for extracting information
        const ipinfo = ext.ipinfo || {};
        const maxmind = ext.maxmind_geolite2 || {};
        const dbip = ext.dbip || {};

        const elements = {
          ip: document.getElementById(\`\${prefix}-ip\`),
          location: document.getElementById(\`\${prefix}-location\`),
          isp: document.getElementById(\`\${prefix}-isp\`),
          proxy: document.getElementById(\`\${prefix}-proxy\`)
        };

        // Helper function for data validation
        const isValid = (val) => val && val !== "PREMIUM FIELD - upgrade to view" && val.trim() !== "";

        // IP display (Your connection)
        if (elements.ip) elements.ip.textContent = sa.ip || "N/A";

        // Show ISP - priority is given to ipinfo
        let ispName = "N/A";
        if (isValid(ipinfo.as_name)) ispName = ipinfo.as_name;
        else if (isValid(maxmind.as_name)) ispName = maxmind.as_name;
        else if (isValid(sa.scamalytics_isp)) ispName = sa.scamalytics_isp;
        else if (isValid(dbip.isp_name)) ispName = dbip.isp_name;

        if (elements.isp) elements.isp.textContent = ispName;

        // Show location (city and country)
        if (elements.location) {
          let city = "";
          let countryName = "";
          let countryCode = "";

          // Trying to find a city
          if (isValid(maxmind.ip_city)) city = maxmind.ip_city;
          else if (isValid(dbip.ip_city)) city = dbip.ip_city;

          // Trying to find a country
          if (isValid(ipinfo.ip_country_name)) {
             countryName = ipinfo.ip_country_name;
             countryCode = ipinfo.ip_country_code;
          } else if (isValid(maxmind.ip_country_name)) {
             countryName = maxmind.ip_country_name;
             countryCode = maxmind.ip_country_code;
          } else if (isValid(dbip.ip_country_name)) {
             countryName = dbip.ip_country_name;
             countryCode = dbip.ip_country_code;
          }

          countryCode = countryCode ? countryCode.toLowerCase() : '';

          let flagElementHtml = countryCode ? \`<img src="https://flagcdn.com/w20/\${countryCode}.png" srcset="https://flagcdn.com/w40/\${countryCode}.png 2x" alt="\${countryCode}" class="country-flag"> \` : '';
          let textPart = [city, countryName].filter(Boolean).join(', ');

          elements.location.innerHTML = (flagElementHtml || textPart) ? \`\${flagElementHtml}\${textPart}\`.trim() : "N/A";
        }

        // Show risk score
        if (elements.proxy) {
          const score = sa.scamalytics_score;
          const risk = sa.scamalytics_risk;
          let riskText = "Unknown";
          let badgeClass = "badge-neutral";
          if (risk && score !== undefined) {
              riskText = \`\${score} - \${risk.charAt(0).toUpperCase() + risk.slice(1)}\`;
              switch (risk.toLowerCase()) {
                  case "low": badgeClass = "badge-yes"; break;
                  case "medium": badgeClass = "badge-warning"; break;
                  case "high": case "very high": badgeClass = "badge-no"; break;
              }
          }
          elements.proxy.innerHTML = \`<span class="badge \${badgeClass}">\${riskText}</span>\`;
        }
      }

      function updateIpApiIoDisplay(geo, prefix, originalHost) {
        const hostElement = document.getElementById(\`\${prefix}-host\`);
        if (hostElement) hostElement.textContent = originalHost || "N/A";
        const elements = {
          ip: document.getElementById(\`\${prefix}-ip\`), location: document.getElementById(\`\${prefix}-location\`),
          isp: document.getElementById(\`\${prefix}-isp\`)
        };
        if (!geo || geo.error) {
          const errorMessage = geo ? geo.reason : 'N/A';
          Object.values(elements).forEach(el => { if(el) el.innerHTML = errorMessage; });
          if (elements.ip) elements.ip.innerHTML = "N/A";
          return;
        }
        if (elements.ip) elements.ip.textContent = geo.ip || "N/A";
        if (elements.location) {
          const city = geo.city || '';
          const countryName = geo.country_name || '';
          const countryCode = geo.country_code ? geo.country_code.toLowerCase() : '';
          let flagElementHtml = countryCode ? \`<img src="https://flagcdn.com/w20/\${countryCode}.png" srcset="https://flagcdn.com/w40/\${countryCode}.png 2x" alt="\${geo.country_code}" class="country-flag"> \` : '';
          let textPart = [city, countryName].filter(Boolean).join(', ');
          elements.location.innerHTML = (flagElementHtml || textPart) ? \`\${flagElementHtml}\${textPart}\`.trim() : "N/A";
        }
        if (elements.isp) elements.isp.textContent = geo.isp || geo.organization || geo.org || 'N/A';
      }


      async function fetchIpApiIoInfo(ip) {
        try {
          const response = await fetch(\`https://ipapi.co/\${ip}/json/\`);
          if (!response.ok) throw new Error(\`HTTP error! status: \${response.status}\`);
          return await response.json();
        } catch (error) {
          console.error('IP API Error (ipapi.co):', error);
          return null;
        }
      }

      function showError(prefix, message = "Could not load data", originalHostForProxy = null) {
        const errorMessage = "N/A";
        const elements = (prefix === 'proxy')
          ? ['host', 'ip', 'location', 'isp']
          : ['ip', 'location', 'isp', 'proxy'];

        elements.forEach(key => {
          const el = document.getElementById(\`\${prefix}-\${key}\`);
          if (!el) return;
          if (key === 'host' && prefix === 'proxy') el.textContent = originalHostForProxy || errorMessage;
          else if (key === 'proxy' && prefix === 'client') el.innerHTML = \`<span class="badge badge-neutral">N/A</span>\`;
          else el.innerHTML = errorMessage;
        });
        console.warn(\`\${prefix} data loading failed: \${message}\`);
      }

      async function loadNetworkInfo() {
        try {
          const proxyIpWithPort = document.body.getAttribute('data-proxy-ip') || "N/A";
          const proxyDomainOrIp = proxyIpWithPort.split(':')[0];
          const proxyHostEl = document.getElementById('proxy-host');
          if(proxyHostEl) proxyHostEl.textContent = proxyIpWithPort;

          if (proxyDomainOrIp && proxyDomainOrIp !== "N/A") {
            let resolvedProxyIp = proxyDomainOrIp;
            if (!/^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$/.test(proxyDomainOrIp)) {
              try {
                const dnsRes = await fetch(\`https://dns.google/resolve?name=\${encodeURIComponent(proxyDomainOrIp)}&type=A\`);
                if (dnsRes.ok) {
                    const dnsData = await dnsRes.json();
                    const ipAnswer = dnsData.Answer?.find(a => a.type === 1);
                    if (ipAnswer) resolvedProxyIp = ipAnswer.data;
                }
              } catch (e) { console.error('DNS resolution for proxy failed:', e); }
            }
            const proxyGeoData = await fetchIpApiIoInfo(resolvedProxyIp);
            updateIpApiIoDisplay(proxyGeoData, 'proxy', proxyIpWithPort);
          } else {
            showError('proxy', 'Proxy Host not available', proxyIpWithPort);
          }

          const clientIp = await fetchClientPublicIP();
          if (clientIp) {
            const clientIpElement = document.getElementById('client-ip');
            if(clientIpElement) clientIpElement.textContent = clientIp;
            const scamalyticsData = await fetchScamalyticsClientInfo(clientIp);
            updateScamalyticsClientDisplay(scamalyticsData);
          } else {
            showError('client', 'Could not determine your IP address.');
          }
        } catch (error) {
          console.error('Overall network info loading failed:', error);
          showError('proxy', \`Error: \${error.message}\`, document.body.getAttribute('data-proxy-ip') || "N/A");
          showError('client', \`Error: \${error.message}\`);
        }
      }

      document.getElementById('refresh-ip-info')?.addEventListener('click', function() {
        const button = this;
        const icon = button.querySelector('.refresh-icon');
        button.disabled = true;
        if (icon) icon.style.animation = 'spin 1s linear infinite';

        const resetToSkeleton = (prefix) => {
          const elementsToReset = ['ip', 'location', 'isp'];
          if (prefix === 'proxy') elementsToReset.push('host');
          if (prefix === 'client') elementsToReset.push('proxy');
          elementsToReset.forEach(key => {
            const element = document.getElementById(\`\${prefix}-\${key}\`);
            if (element) element.innerHTML = \`<span class="skeleton" style="width: 120px;"></span>\`;
          });
        };

        resetToSkeleton('proxy');
        resetToSkeleton('client');
        loadNetworkInfo().finally(() => setTimeout(() => {
          button.disabled = false; if (icon) icon.style.animation = '';
        }, 1000));
      });

      const style = document.createElement('style');
      style.textContent = \`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\`;
      document.head.appendChild(style);

      document.addEventListener('DOMContentLoaded', () => {
        loadNetworkInfo();

        const hiddifyBtn = document.getElementById('hiddify-import-btn');
        const modal = document.getElementById('hiddify-dns-modal');
        const continueBtn = document.getElementById('hiddify-modal-continue');

        if (hiddifyBtn && modal && continueBtn) {
          hiddifyBtn.addEventListener('click', function(event) {
            event.preventDefault();
            modal.style.display = 'flex';
            setTimeout(() => modal.classList.add('visible'), 10);
          });

          continueBtn.addEventListener('click', function() {
            modal.classList.remove('visible');
            setTimeout(() => {
                modal.style.display = 'none';
                window.location.href = hiddifyBtn.href;
            }, 300);
          });

          modal.addEventListener('click', function(event) {
            if (event.target === modal) {
              modal.classList.remove('visible');
              setTimeout(() => modal.style.display = 'none', 300);
            }
          });;
        }
      });
  `;
}
