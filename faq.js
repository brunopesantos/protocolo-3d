document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(function (question) {
    question.addEventListener('click', function () {
      const isActive = question.classList.contains('active');

      // Fechar todas as respostas
      questions.forEach(function (item) {
        item.classList.remove('active');
        item.nextElementSibling.style.maxHeight = null;
      });

      // Abrir a resposta clicada, se não estiver ativa
      if (!isActive) {
        question.classList.add('active');
        const answer = question.nextElementSibling;
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
});
