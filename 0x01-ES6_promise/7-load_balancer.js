export default function loadBalancer(chainaDownload, USDownload) {
  return Promise.race([chainaDownload, USDownload]);
}
