$(function () {
	var marquee = $("#marquee");
	marquee.css({ "overflow": "hidden", "width": "100%" });
	// оболочка для текста ввиде span (IE не любит дивы с inline-block)
	marquee.wrapInner("<span>");
	marquee.find("span").css({ "width": "50%", "display": "inline-block", "text-align": "center" });
	marquee.append(marquee.find("span").clone()); // тут у нас два span с текстом
	marquee.wrapInner("<div>");
	marquee.find("div").css("width", "200%");
	var reset = function () {
		$(this).css("margin-left", "0%");
		$(this).animate({ "margin-left": "-100%" }, 120000, 'linear', reset);
	};
	reset.call(marquee.find("div"));
});

$(function () {
	var marquee = $("#marquee1");
	var contentWidth = marquee.find("div").width();

	marquee.wrapInner("<div class='marquee-inner'>");
	marquee.find(".marquee-inner").css({
		"width": "200%",
		"margin-left": "-100%"
	});

	var reset = function () {
		$(this).css("margin-left", "-100%");
		$(this).animate({ "margin-left": "0%" }, 40000, 'linear', reset);
	};

	reset.call(marquee.find(".marquee-inner"));
});

$(function () {
	var marquee = $("#marquee2");
	marquee.css({ "overflow": "hidden", "width": "100%" });
	// оболочка для текста ввиде span (IE не любит дивы с inline-block)
	marquee.wrapInner("<span>");
	marquee.find("span").css({ "width": "50%", "display": "inline-block", "text-align": "center" });
	marquee.append(marquee.find("span").clone()); // тут у нас два span с текстом
	marquee.wrapInner("<div>");
	marquee.find("div").css("width", "200%");
	var reset = function () {
		$(this).css("margin-left", "0%");
		$(this).animate({ "margin-left": "-100%" }, 120000, 'linear', reset);
	};
	reset.call(marquee.find("div"));
});

function popupClose() {
	let closePop = document.querySelector('.popup_none')
	closePop.style.display = "none"
}

function popupBlock() {
	let closePop = document.querySelector('.popup_none')
	closePop.style.display = "block"
}


// tg bot
document.getElementById('submitBtn').addEventListener('click', function () {
	const name = document.getElementById('name').value;
	const phone = document.getElementById('phone').value;
	const email = document.getElementById('email').value;

	const message = `Имя: ${name}\nТелефон: ${phone}\nEmail: ${email}`;

	const token = '7189205807:AAGTw2B8ZOmYynLkNcm7pxlnkUofAokY3Fk';
	const chat_id = '-1002075224515';
	const url = `https://api.telegram.org/bot${token}/sendMessage`;

	fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			chat_id: chat_id,
			text: message
		})
	})
		.then(response => response.json())
		.then(data => {
			if (data.ok) {
				alert('Сообщение отправлено успешно!');
			} else {
				alert('Ошибка при отправке сообщения!');
			}
		})
		.catch(error => {
			console.error('Ошибка:', error);
			alert('Ошибка при отправке сообщения!');
		});
});
