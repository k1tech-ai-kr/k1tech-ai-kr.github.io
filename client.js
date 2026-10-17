// 문의 준비서를 이 기기에서만 파일로 만든다. 네트워크 전송·브라우저 저장 없음.
const form = document.querySelector('#contact-form');
form?.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const text = ['K1 Tech 문의 준비서', '※ 이 문서는 아직 전송되지 않았습니다.', '', '관심 분야: ' + data.get('service'), '소속 유형: ' + data.get('org'), '', '해결하고 싶은 문제', String(data.get('problem')).trim()].join('\n');
  const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'K1-문의-준비서.txt';
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
  document.querySelector('#form-status').textContent = '준비서 다운로드를 요청했습니다. 아직 접수되거나 전송된 내용은 없습니다.';
});
