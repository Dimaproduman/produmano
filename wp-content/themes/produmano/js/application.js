var MESS = {
    'ru': {
        'basic_set_confirm': 'При выборе базового стиля, все выбранные вами цвета комнат будут сброщенны. Вы действительно хотите это сделать?',
        'enter_address': 'Введите адрес',
        'enter_phone': 'Введите номер телефона',
        'error_send_order': 'Ошибка отправки. Попробуйте позже.',
        'order_send_ok': "Спасибо! Заказ принят. Мы свяжемся с вами в ближайшее время."
    }
}
var lang = 'ru';

//потолочный карниз
var ceiling_cornices = 1;


// макс кол-во всех комнат (включая кухню ванную и.т.д)
var max_rooms = 10;
// Список цветов для каждого типа комнат. 
var current_color_proj = {  
    'bathroom': [
        { 
            'image': { 
                "with_cornice": '/wp-content/uploads/bathroom/roz-r.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/bathroom/modern/new/bathroom-1.jpg',
				"without_cornice_d": '/wp-content/uploads/bathroom/roz.jpg'
				
            },
            'title': 'Белая роскошь', 'color': '#f0f0f0', 'thumb': { 
				"with_cornice": '/wp-content/uploads/bathroom/roz-r-small.jpg', 
				"without_cornice": '/wp-content/themes/produmano/images/gallery/bathroom/modern/new/bathroom-1-small.jpg', "without_cornice_d": '/wp-content/uploads/bathroom/roz-small.jpg' }
        },
        { 
            'image': { 
                "with_cornice": '/wp-content/uploads/bathroom/pix-r.jpg',
                "without_cornice": '/wp-content/uploads/bathroom/pix.jpg',
            },
            'title': 'Шахматы', 'color': '#cdb8a5', 'thumb': { "with_cornice": '/wp-content/uploads/bathroom/pix-r-small.jpg',
			"without_cornice": '/wp-content/uploads/bathroom/pix-small.jpg' }
        },
        { 
            'image': { 
                "with_cornice": '/wp-content/uploads/bathroom/orna-r.jpg',
                "without_cornice": '/wp-content/uploads/bathroom/orna.jpg',
            },
            'title': 'Орнамент', 'color': '#f0f0f0', 'thumb': { "with_cornice": '/wp-content/uploads/bathroom/orna-r-small.jpg', "without_cornice": '/wp-content/uploads/bathroom/orna-small.jpg' }
        },
        { 
            'image': { 
                "with_cornice": '/wp-content/uploads/bathroom/angl-r.jpg',
                "without_cornice": '/wp-content/uploads/bathroom/angl.jpg',
            },
            'title': 'Английский', 'color': '#957d70', 'thumb': { "with_cornice": '/wp-content/uploads/bathroom/angl-r-small.jpg', "without_cornice": '/wp-content/uploads/bathroom/angl-small.jpg' }
        },
        { 
            'image': { 
                "with_cornice": '/wp-content/uploads/bathroom/antich-r.jpg',
                "without_cornice": '/wp-content/uploads/bathroom/antich.jpg',
            },
			
				"ids":'10', 'title': 'Античность', 'color': '#a1744c', 'thumb': { "with_cornice": '/wp-content/uploads/bathroom/antich-r-small.jpg', "without_cornice": '/wp-content/uploads/bathroom/antich-small.jpg' }
        },
		{ 
            'image': { 
                "with_cornice": '/wp-content/uploads/bathroom/kamne-r.jpg',
                "without_cornice": '/wp-content/uploads/bathroom/kamne.jpg',
            },
            'title': 'В камне', 'color': '#7b674e', 'thumb': { "with_cornice": '/wp-content/uploads/bathroom/kamne-r-small.jpg', "without_cornice": '/wp-content/uploads/bathroom/kamne-small.jpg' }
        },
		{ 
            'image': { 
                "with_cornice": '/wp-content/uploads/bathroom/eko-r.jpg',
                "without_cornice": '/wp-content/uploads/bathroom/eko.jpg',
            },
            'title': 'Эко', 'color': '#c7b484', 'thumb': { "with_cornice": '/wp-content/uploads/bathroom/eko-r-small.jpg', "without_cornice": '/wp-content/uploads/bathroom/eko-small.jpg' }
        },
		{ 
            'image': { 
                "with_cornice": '/wp-content/uploads/bathroom/prov-r.jpg',
                "without_cornice": '/wp-content/uploads/bathroom/prov.jpg',
            },
            'title': 'Прованс', 'color': '#d1d1d1', 'thumb': { "with_cornice": '/wp-content/uploads/bathroom/prov-r-small.jpg', "without_cornice": '/wp-content/uploads/bathroom/prov-small.jpg' }
        },
		{ 
            'image': { 
                "with_cornice": '/wp-content/uploads/bathroom/min-r.jpg',
                "without_cornice": '/wp-content/uploads/bathroom/min.jpg',
            },
            'title': 'Яркий минимализм', 'color': '#dedbd4', 'thumb': { "with_cornice": '/wp-content/uploads/bathroom/min-r-small.jpg', "without_cornice": '/wp-content/uploads/bathroom/min-small.jpg' }
        },
		{ 
            'image': { 
                "with_cornice": '/wp-content/uploads/bathroom/koral-r.jpg',
                "without_cornice": '/wp-content/uploads/bathroom/koral.jpg',
            },
            'title': 'Кораллы', 'color': '#e4c8c4', 'thumb': { "with_cornice": '/wp-content/uploads/bathroom/koral-r-small.jpg', "without_cornice": '/wp-content/uploads/bathroom/koral-small.jpg' }
        }
        
    ],
    'kitchen': [
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/classic/kitchen-1.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/modern/new/kitchen-1.jpg',
				"without_cornice_d": '/wp-content/uploads/2016/09/kyh_d.jpg'
            },
            'title': 'Белый', 'color': '#fff', 'thumb': { "with_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/classic/kitchen-1-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/modern/new/kitchen-1-small.jpg', "without_cornice_d": '/wp-content/uploads/2016/09/kyh_d-small.jpg'			}
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/classic/kitchen-3.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/modern/kitchen-3.jpg'
            },
            'title': 'Крем', 'color': '#FDF6F6', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/classic/kitchen-3-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/modern/kitchen-3-small.jpg' }
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/classic/kitchen-2.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/modern/kitchen-2.jpg'
            },
            'title': 'Ваниль', 'color': '#FBF1D1', 'thumb': { "with_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/classic/kitchen-2-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/modern/kitchen-2.jpg' }
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/classic/kitchen-4.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/modern/kitchen-4.jpg'
            },
            'title': 'Миндаль', 'color': '#F4DFB5', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/classic/kitchen-4-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/modern/kitchen-4-small.jpg' }
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/classic/kitchen-6.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/modern/kitchen-6.jpg'
            },
            'title': 'Какао', 'color': '#C7A987', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/classic/kitchen-6-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/modern/kitchen-6-small.jpg' }
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/classic/kitchen-7.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/modern/kitchen-7.jpg'
            },
            'title': 'Кофе с молоком', 'color': '#B4A7A0', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/classic/kitchen-7-small-B4A7A0.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/modern/kitchen-7-small.jpg' }
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/classic/kitchen-8.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/modern/kitchen-8.jpg'
            },
            'title': 'Фисташковый', 'color': '#E1EFBD', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/classic/kitchen-8-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/modern/kitchen-8-small.jpg' }
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/classic/kitchen-5.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/modern/kitchen-5.jpg'
            },
            'title': 'Синий', 'color': '#C8DCE9', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/classic/kitchen-5-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/kitchen/modern/kitchen-5-small.jpg' }
        }
    ],
    'corridor': [
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/corridor/classic/corridor-1.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/corridor/modern/new/corridor-1.jpg',
				"without_cornice_d": '/wp-content/themes/produmano/images/gallery/corridor/modern/kor_d.jpg'
            },
            'title': 'Белый', 'color': '#fff', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/corridor/classic/corridor-1-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/corridor/modern/new/corridor-1-small.jpg', "without_cornice_d": '/wp-content/themes/produmano/images/gallery/corridor/modern/kor_d-small.jpg'			}
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/corridor/classic/corridor-2.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/corridor/modern/corridor-2.jpg'
            },
            'title': 'Крем', 'color': '#FDF6F6', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/corridor/classic/corridor-2-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/corridor/modern/corridor-2-small.jpg' }
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/corridor/classic/corridor-3.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/corridor/modern/corridor-3.jpg'
            },
            'title': 'Ваниль', 'color': '#FBF1D1', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/corridor/classic/corridor-3-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/corridor/modern/corridor-3-small.jpg' }
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/corridor/classic/corridor-4.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/corridor/modern/corridor-4.jpg'
            },
            'title': 'Миндаль', 'color': '#F4DFB5', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/corridor/classic/corridor-4-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/corridor/modern/corridor-4-small.jpg' }
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/corridor/classic/corridor-5.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/corridor/modern/corridor-5.jpg'
            },
            'title': 'Какао', 'color': '#C7A987', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/corridor/classic/corridor-5-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/corridor/modern/corridor-5-small.jpg' }
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/corridor/classic/corridor-6.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/corridor/modern/corridor-6.jpg'
            },
            'title': 'Кофе с молоком', 'color': '#B4A7A0', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/corridor/classic/corridor-6-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/corridor/modern/corridor-6-small.jpg' }
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/corridor/classic/corridor-7.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/corridor/modern/corridor-7.jpg'
            },
            'title': 'Фисташковый', 'color': '#E1EFBD', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/corridor/classic/corridor-7-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/corridor/modern/corridor-7-small.jpg' }
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/corridor/classic/corridor-8.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/corridor/modern/corridor-8.jpg'
            },
            'title': 'Синий', 'color': '#C8DCE9', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/corridor/classic/corridor-8-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/corridor/modern/corridor-8-small.jpg' }
        }
    ],
    'main_room': [
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/room-main/classic/room-1.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/room-main/modern/room-1.jpg'
            },
            'title': 'Белый', 'color': '#fff', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/room-main/classic/room-1-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/room-main/modern/room-1-small.jpg' }
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/room-main/classic/room-3.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/room-main/modern/room-3.jpg'
            },
            'title': 'Крем', 'color': '#FDF6F6', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/room-main/classic/room-3-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/room-main/modern/room-3-small.jpg' }
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/room-main/classic/room-2.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/room-main/modern/room-2.jpg'
            },
            'title': 'Ваниль', 'color': '#FBF1D1', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/room-main/classic/room-2-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/room-main/modern/room-2-small.jpg' }
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/room-main/classic/room-4.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/room-main/modern/room-4.jpg'
            },
            'title': 'Миндаль', 'color': '#F4DFB5', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/room-main/classic/room-4-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/room-main/modern/room-4-small.jpg' }
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/room-main/classic/room-6.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/room-main/modern/room-6.jpg'
            },
            'title': 'Какао', 'color': '#C7A987', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/room-main/classic/room-6-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/room-main/modern/room-6-small.jpg' }
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/room-main/classic/room-7.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/room-main/modern/room-7.jpg'
            },
            'title': 'Кофе с молоком', 'color': '#B4A7A0', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/room-main/classic/room-7-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/room-main/modern/room-7-small.jpg' }
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/room-main/classic/room-8.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/room-main/modern/room-8.jpg'
            },
            'title': 'Фисташковый', 'color': '#E1EFBD', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/room-main/classic/room-8-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/room-main/modern/room-8-small.jpg' }
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/room-main/classic/room-5.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/room-main/modern/room-5.jpg'
            },
            'title': 'Синий', 'color': '#C8DCE9', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/room-main/classic/room-5-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/room-main/modern/room-5-small.jpg' }
        }
    ],
    'room': [
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/room/classic/room-1.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/room/modern/room-1.jpg'
            },
            'title': 'Белый', 'color': '#fff', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/room/classic/room-1-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/room/modern/room-1-small.jpg' }
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/room/classic/room-3.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/room/modern/room-3.jpg'
            },
            'title': 'Крем', 'color': '#FDF6F6', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/room/classic/room-3-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/room/modern/room-3-small.jpg' }
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/room/classic/room-2.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/room/modern/room-2.jpg'
            },
            'title': 'Ваниль', 'color': '#FBF1D1', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/room/classic/room-2-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/room/modern/room-2-small.jpg' }
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/room/classic/room-4.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/room/modern/room-4.jpg'
            },
            'title': 'Миндаль', 'color': '#F4DFB5', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/room/classic/room-4-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/room/modern/room-4-small.jpg' }
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/room/classic/room-6.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/room/modern/room-6.jpg'
            },
            'title': 'Какао', 'color': '#C7A987', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/room/classic/room-6-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/room/modern/room-6-small.jpg' }
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/room/classic/room-7.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/room/modern/room-7.jpg'
            },
            'title': 'Кофе с молоком', 'color': '#B4A7A0', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/room/classic/room-7-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/room/modern/room-7-small.jpg' }
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/room/classic/room-8.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/room/modern/room-8.jpg'
            },
            'title': 'Фисташковый', 'color': '#E1EFBD', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/room/classic/room-8-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/room/modern/room-8-small.jpg' }
        },
        { 
            'image': {
                "with_cornice": '/wp-content/themes/produmano/images/gallery/room/classic/room-5.jpg',
                "without_cornice": '/wp-content/themes/produmano/images/gallery/room/modern/room-5.jpg'
            },
            'title': 'Синий', 'color': '#C8DCE9', 'thumb': {"with_cornice": '/wp-content/themes/produmano/images/gallery/room/classic/room-5-small.jpg', "without_cornice": '/wp-content/themes/produmano/images/gallery/room/modern/room-5-small.jpg' }
        }
    ]
};
/*
    Парсинг URL запроса
*/
function parseQuery(qstr) {
    var query = {};
    var a = qstr.substr(1).split('&');
    for (var i = 0; i < a.length; i++) {
        var b = a[i].split('=');
        query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
    }
    return query;
}
/*
    Модель цвета
*/
var ColorModel = Backbone.Model.extend({
    defaults: {
        color: '#FFFFFF',
        title: 'Белый',
        image: { 'with_cornice': '/wp-content/themes/produmano/images/img-big-design.jpg', 'without_cornice': '/wp-content/themes/produmano/images/img-big-design.jpg' },
        thumb: { 'with_cornice': '/wp-content/themes/produmano/images/img-design-bathroom.jpg', 'without_cornice': '/wp-content/themes/produmano/images/img-design-bathroom.jpg' }
    }
});

/*
    Модель типа комнаты
*/
var RoomTypeModel = Backbone.Model.extend({
    defaults: {
        title: 'Спальня',
        color: new ColorModel(current_color_proj['room'][0]),
        type: 'room',
        is_deleted: true,
        cornices: false
    },
    get_image: function() {
        var m = this.get('color');
        if('toJSON' in m) {
            m = m.toJSON();
        }
        if(this.get('cornices')) {
            return m['image']['with_cornice'];
        } 
		else if(this.get('d')) {
			return m['image']['without_cornice_d'];
			
			
		}
		else {
            return m['image']['without_cornice'];
        }
    },
    get_thumb: function() {
        var m = this.get('color');
        if('toJSON' in m) {
            m = m.toJSON();
        }
        if(this.get('cornices')) {
            return m['thumb']['with_cornice'];
        } 
		else if(this.get('d')) {
			return m['thumb']['without_cornice_d'];
		}
		else {
            return m['thumb']['without_cornice'];
        }
    },
    toJSON: function() {

        var j = _(this.attributes).clone();
        j.thumb = this.get_thumb();
        j.image = this.get_image();
        return j;
    }
});
/*
    Стандартный список комнат
*/
var default_rooms = [
    new RoomTypeModel({color: new ColorModel(current_color_proj['bathroom'][0]), title: 'Санузел/ванная', type: 'bathroom', is_deleted: false}),
    new RoomTypeModel({color: new ColorModel(current_color_proj['kitchen'][0]), title: 'Кухня', type: 'kitchen', is_deleted: false}),
    new RoomTypeModel({color: new ColorModel(current_color_proj['corridor'][0]), title: 'коридор/прихожая', type: 'corridor', is_deleted: false}),
    new RoomTypeModel({color: new ColorModel(current_color_proj['main_room'][0]), title: 'Гостиная', type: 'main_room', is_deleted: false})
];
/*
    Поля ввода параметров квартиры
*/
var area_fields = [
    { id: 'rooms', title: 'Кол-во комнат', placeholder: '1', min_value: 1, max_value: 10 },
    { id: 'area', title: 'Площадь квартиры', placeholder: '35', min_value: 25, max_value: 10000},
    { id: 'area_bathrooms', title: 'Площадь санузлов', placeholder: '3,5', min_value: 1.8, max_value: 1000},
];
/* Модель URL запроса */
var UrlQueryModel = Backbone.Model.extend({
    defaults: {
        'rooms': 1,
        'area': 35,
        'area_bathrooms': 3.5,
        'type': 'basic',
        'min_value': {
            'area': 25,
            'area_bathrooms': 3,
            'rooms': 1
        },
        'max_value': {
            'area': 10000,
            'area_bathrooms': 1000,
            'rooms': 4
        },
        'bathrooms_type': 'common'
    },
    initialize: function() {
        var types = ['area', 'area_bathrooms', 'rooms'];
        for(var i in types) {
            var val = this.get(types[i]);
            this.set(types[i], Math.min(this.get('max_value')[types[i]], Math.max(this.get('min_value')[types[i]], val)));
        }

        if(this.get('bathrooms_type') != 'separate') {
            this.set('bathrooms_type', 'common');
        }
    }
});
/* 
    Коллекция моделей комнат
*/
var RoomCollection = Backbone.Collection.extend({
    model: RoomTypeModel
});
/*
    Список комнат. Для страницы дизайна задается из стандартных значений, для страницы заказа из POST
*/
var c_rooms;
if('page' in window) {
    if(page == 'design') {
        url_query = new UrlQueryModel(parseQuery(document.location.search));
        for(var i = 0; i < url_query.get('rooms')-1; i++) {
            default_rooms.push(new RoomTypeModel({color: new ColorModel(current_color_proj['room'][0]), title: 'Спальня', type: 'room', is_deleted: true}));
        }
         
        c_rooms = new RoomCollection(default_rooms);
    } else if (page == 'order') {
        url_query = new UrlQueryModel(post_data);
        if(!jQuery.isEmptyObject(rooms)) {
            c_rooms = new RoomCollection(rooms);
        }
        else {
            for(var i = 0; i < url_query.get('rooms')-1; i++) {
                default_rooms.push(new RoomTypeModel({color: new ColorModel(current_color_proj['room'][0]), title: 'Спальня', type: 'room', is_deleted: true}));
            }
            c_rooms = new RoomCollection(default_rooms);
        }
 
       
        url_query.set('area', prepare_number(url_query.get('area')));
        url_query.set('area_bathrooms', prepare_number(url_query.get('area_bathrooms')));
        
    }
    else {
        url_query = new UrlQueryModel();
    }
}
function prepare_price(price) {
    return Math.round(new Number(price)).toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 ");
}
// Функция более человеческого вывода цены вида 10.22 руб.
function print_price(price) {
    return '' + prepare_price(price) + ' руб.'
} 

/*
    Модель базового поля (площадь, кол-во комнат и.т.д.)
*/
var AreaField = Backbone.Model.extend({
    defaults: {
        id: '',
        title: '',
        placeholder: '0',
        value: '',
        max_value: 0,
        min_value: 0
    },
    initialize: function() {
        // Если в URL параметрах установленны значения, получаем их в поле
        this.set('value', url_query.get(this.get('id')));
    }
});
/*
    Коллекция базовых полей
*/
var AreaFieldCollection = Backbone.Collection.extend({
    model: AreaField
});
var collection = new AreaFieldCollection(area_fields);

/*
    Представление базового поля
*/
var AreaFieldView = Backbone.View.extend({
    tagName: 'div',
    className: 'input',
    template: $('#area-field').html(),
    events: {
        'change input': 'change'
    },
    initialize: function() {
        //this.listenTo(this.model, 'change', this.render);
    },
    render: function() {
        var tmpl = _.template(this.template);
        this.$el.html(tmpl(this.model.toJSON()));

        return this;
    },
    change: function() {
        var val = prepare_number(this.$el.find('input').val());
        console.log(val);
        if (this.model.get('min_value') !== false && val < this.model.get('min_value')) {
            val = this.model.get('min_value');
        }
        if (this.model.get('max_value') !== false && val > this.model.get('max_value')) {
            val = this.model.get('max_value');
        }
        this.$el.find('input').val(val);
        this.model.set('value', val);
        Backbone.trigger('recalculate');

        if(this.model.get('id') == 'rooms') {
            Backbone.trigger('rerender_room_types');
        }
    }
});
/* Модель цены */
var PriceModel = Backbone.Model.extend({
    defaults: {
        price: 0,
        label: 'ЦЕНА'
    }
});
// При изменении типа санузла, пересчитать цену
jQuery(document).on('change', '#bathrooms_type', function() {
    Backbone.trigger('recalculate');
});
// Запрещаем некоректный ввод в поля ввода цифр
jQuery(document).on('keypress', '.number', function (e) {
    if (event.shiftKey == true) {
            event.preventDefault();
        }
        if ((event.keyCode >= 48 && event.keyCode <= 57) || 
            (event.keyCode >= 96 && event.keyCode <= 105) || 
            event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 37 ||
            event.keyCode == 39 || event.keyCode == 46 || event.keyCode == 44) {

        } else {
            event.preventDefault();
        }
        if(($(this).val().indexOf('.') !== -1 || $(this).val().indexOf(',') !== -1) && (event.keyCode == 46 || event.keyCode == 44))
        {
            event.preventDefault(); 
        }
});
jQuery(document).on('change', '.number', function() {
    var val = jQuery(this).val().trim();
    if(val[val.length-1] === '.' || val[val.length-1] === ',') {
        val += '0';
        jQuery(this).val(val);
    }
    
});
/*
    Модель опции.
*/
var OptionModel = Backbone.Model.extend({
    defaults: {
        "title": "option",
        "price": 0,
        "price_type": "fixed",
        "origin_price": 0,
    }
});
 
/*
    Представление комнаты
*/
var RoomTypeView = Backbone.View.extend({
    tagName: 'div',
    className: 'col-lg-4 col-md-4 col-sm-6 room-item',
    template: jQuery('#room-type').html(),
    events: {
        'click .btn-delete': 'remove',
        'click .btn-edit': 'edit'
    },
    initialize: function() {
        Backbone.on('reload_room_type', this.render, this);
        this.model.on('remove', this.remove, this);
        this.model.on('change', function() {
            Backbone.trigger('change_rooms');
        }, this);
        Backbone.on('change_cornise', this.change_cornise, this);
    },
    change_cornise: function() {
        var add = -1;
        if(jQuery('#ceiling_cornices').is(':checked')) {
            add += jQuery('.list-colors .color').length;
        }
        
        sliderModal.goToSlide(parseInt(jQuery('.color.selected').data('id')) + add);
        return false;
        //jQuery('.color.selected').click();
    },
    render: function() {
        var obj = this.model.toJSON();
        obj['id'] = this.model.cid;
        obj['design_type'] = jQuery('input[name="design_type"]:checked').attr('id');
        this.$el.html(_.template(this.template)(obj));
        Backbone.trigger('room_render_end');
        return this;
    },
    remove: function() {
       
        var model = this.model;
        c_rooms.remove(model);
        this.$el.fadeOut(function() {
        });
        
        return false;
    },
    edit: function() {
        jQuery('.list-colors').html('');
		
		
		
        var cols = current_color_proj[this.model.get('type')];
        var tmpl = _.template(jQuery('#select-color').html());
        
        var is_default = true;
        var el = jQuery('#ceiling_cornices');
        var label = el.parent();
        if(this.model.get('cornices')) {
            label.css("background-position","0 -199px");    
            el.attr("checked", true)
        } else {
            label.css("background-position","0 0");    
            el.attr("checked", false)
        }
        var cor = jQuery('#ceiling_cornices').is(':checked') ? "with_cornice":"without_cornice";
        var color_with_cornice = [];
		
		
		
        jQuery('.select-desing-image').html('');
        var id = 0;
		
		//var idt = current_color_proj[this.model.get('ids')];
		//console.log(idt);
        
		for(var i in cols) {
            id++;
			
			console.log(cols[i]['ids']);
			
			//ids = cols[i]['ids'];
            var $el = jQuery('<div class="col-lg-3 col-md-3"></div>');
            cols[i]['id'] = id;
			
            $el.html(tmpl(cols[i]));

            $el.find('a').data('model', cols[i]);
             
            if(this.model.get('color').get('title') == cols[i]['title'] && this.model.get('color').get('color') == cols[i]['color']) {
                $el.find('a').addClass('selected');
                is_default = false;

				
                //var image = cols[i]['image'][cor];// this.model.get_image();
                //jQuery('.select-desing-image img').attr('src', image);
            }
			
			
			
            //var image = cols[i]['image']["without_cornice"];
			var image = cols[i]['image']["without_cornice"];
            color_with_cornice.push([cols[i]['image']['with_cornice'], this.model.get('color').get('title'), id]);
			
			  
            jQuery('.select-desing-image').append('<img id="no' + id + '" data-id="' + id + '" data-cornice="without" src="' + image + '" alt="' + this.model.get('color').get('title') + '">');
            jQuery('.list-colors').append($el);
        }
		
		
		
		
        _.each(color_with_cornice, function(img) {
            jQuery('.select-desing-image').append('<img width="1068px" src="' + img[0] + '" alt="' + img[1] + '" data-id="' + img[2] + '" data-cornice="with">');
        });
		
		
		console.log(this.model.get('type'));
		
		
		//подмена картинки
		
		if(this.model.get('type') == 'bathroom'){
				jQuery("#no1").attr("src", "/wp-content/uploads/bathroom/roz.jpg");
				
		}
		
		if(this.model.get('type') == 'kitchen'){
				jQuery("#no1").attr("src", "/wp-content/uploads/2016/09/kyh_d.jpg");
				
		}
		
		if(this.model.get('type') == 'corridor'){
				jQuery("#no1").attr("src", "/wp-content/uploads/2016/09/kor_d.jpg");
				
		}
		
		
		
			
		
        

        //changeCheck(jQuery('#ceiling_cornices').prop('checked', false));
        if(is_default) {
            jQuery('.list-colors .color:eq(0)').click();
        }
        window.editing_model = this.model;

        var add = -1;
        if(jQuery('#ceiling_cornices').is(':checked')) {
            add += jQuery('.list-colors .color').length;
        }
        
          

        setTimeout(function() { sliderModal.reloadSlider(); sliderModal.goToSlide(parseInt(jQuery('.color.selected').data('id')) + add); }, 500);
		
		
		
		
		
		
		jQuery("input#ceiling_cornices").before("<div id='zv' class='o999'><a style='left: 10px;' class='tooltip1' ><div>?</div><span class='classic' style='left: -214px;'>Рекомендуем для интерьеров в классическом стиле</span></a></div>");
		
		if(this.model.get('type') == 'bathroom'){
				jQuery("span.niceCheck em").html("РАЗДЕЛЬНЫЙ САНУЗЕЛ");
				jQuery("#zv").hide();
				
		}
		else{
			jQuery("span.niceCheck em").html("ПОТОЛОЧНЫЙ КАРНИЗ");
		}
    }
});
// Коллекция опций
var OptionCollection = Backbone.Collection.extend({
    model: OptionModel
});
// Цена за опции
var option_price = 0;
// Базовая цена
var basic_price = 0;

// Шаблон таблицы опций
var option_template = '<h2>Опции</h2>\
                      <div class="col-lg-4 col-md-4 col-sm-6"><%= options["Планировка"] %><%= options["Инженерия"] %></div>\
                      <div class="col-lg-4 col-md-4 col-sm-6"><%= options["Черновые работы"] %><%= options["Комплектация"] %></div>\
                      <div class="col-lg-4 col-md-4 col-sm-6"><%= options["Отделочные работы"] %></div>\
                      <div class="clearfix"></div>';
// Опции 
/*
    У каждой опции есть параметры
    price_type - тип цены. Вот список типов цен:
        fixed - фиксированная цена за опцию
        area - цена за 1 кв.м
        unit - цена за единицу
        included - бесплатно (включено)
    title - заголовок
    price - цена (за ед, за метр)
*/ 

var options = {
    "Планировка": [
        new OptionModel({
            "title": "Эскиз планировки квартиры с расстановкой мебели",
            "price": 15000,
            "price_type": "fixed"
        }),
        new OptionModel({
            "title": "Проект перепланировки для согласования",
            "price": 25000,
            "price_type": "fixed"
        }),
        new OptionModel({
            "title": "Эскизный проект объединения санузлов",
            "price": 5000,
            "price_type": "fixed"
        }),
    ],
    "Черновые работы": [
        new OptionModel({
            "title": "Демонтаж покрытия стен, пола, потолка",
            "price": 500,
            "price_type": "area"
        }),
        new OptionModel({
            "title": "Возведение стен <br> (указать кол-во кв.м.) <br> ",
            "price": 1750,
            "price_type": "unit"
        }),
        new OptionModel({
            "title": "Стяжка и наливной пол",
            "price": 1300,
            "price_type": "area"
        }),
        new OptionModel({
            "title": "Оштукатуривание стен визуальное",
            "price": 0,
            "price_type": "included"
        }),
        new OptionModel({
            "title": "Оштукатуривание стен по маякам",
            "price": 1500,
            "price_type": "area"
        }),
    ],
    "Инженерия": [
        new OptionModel({
            "title": "Монтаж/замена электропроводки стандартная",
            "price": 1100,
            "price_type": "area"
        }),
        new OptionModel({
            "title": "Монтаж/замена электропроводки по индивидуальному проекту",
            "price": 1600,
            "price_type": "area"
        }),
        new OptionModel({
            "title": "Установка радиаторов  <br>(указать кол-во штук)<br>",
            "price": 20000,
            "price_type": "unit"
        }),
        new OptionModel({
            "title": "Установка бойлера ",
            "price": 12000,
            "price_type": "fixed"
        }),
        new OptionModel({
            "title": "Установка кондиционера <br>(указать количество блоков)<br>",
            "price": 35000,
            "price_type": "unit"
        }),
        new OptionModel({
            "title": "Установка система защиты от протечек",
            "price": 20000,
            "price_type": "fixed"
        }),
		 new OptionModel({
            "title": "Замена окон на пластиковые стеклопакеты<br>",
            "price": 0,
            "price_type": "unit"
        }),
    ],
    "Отделочные работы": [
        new OptionModel({
            "title": "Замена натяжного потолка на окрашенный",
            "price": 1000,
            "price_type": "area"
        }),
        new OptionModel({
            "title": "Замена ламината на паркетную доску (Barlinek)",
            "price": 3100,
            "price_type": "area"
        }),
        new OptionModel({
            "title": "Замена пластикового плинтуса на плинтус мдф шпонированный (в цвет дверей)",
            "price": 250,
            "price_type": "area"
        }),
        new OptionModel({
            "title": "Плитка напольная в кухню",
            "price": 0,
            "price_type": "included"
        }),
        new OptionModel({
            "title": "Плитка на фартук в кухню <br>(указать количество погонных метров)<br>",
            "price": 2100,
            "price_type": "unit"
        }),
        new OptionModel({
            "title": "Плитка напольная в коридор <br>(указать кол-во кв.м.)<br>",
            "price": 1100,
            "price_type": "unit"
        }),
        new OptionModel({
            "title": "Теплый пол (ванная)",
            "price": 9000,
            "price_type": "fixed"
        }),
        new OptionModel({
            "title": "Теплый пол (кухня)",
            "price": 18000,
            "price_type": "fixed"
        }),
        new OptionModel({
            "title": "Теплый пол в комнаты <br>(указать кол-во кв.м.)<br>",
            "price": 2500,
            "price_type": "unit"
        }),
		 new OptionModel({
            "title": "Отделка балкона",
            "price": 0,
            "price_type": "included2"
        }),
    ],
    "Комплектация": [
        new OptionModel({
            "title": "Замена входной двери",
            "price": 30000,
            "price_type": "fixed"
        }),
        new OptionModel({
            "title": "- замена окон",
            "price": 0,
            "price_type": "included",
            "design_type": ["individual"]
        }),
        new OptionModel({
            "title": "Замена смесителей Lemark (Чехия) на смесители Grohe (Германия)",
            "price": 8000,
            "price_type": "fixed"
        }),
        new OptionModel({
            "title": "Замена сантехники на сантехнику в классическом стиле",
            "price": 30000,
            "price_type": "fixed"
        }),
        new OptionModel({
            "title": "Замена дверей экошпон на массив <br>(указать кол-во дверей)<br>" ,
            "price": 15000,
            "price_type": "unit"
        }),
        new OptionModel({
            "title": "Установка кухни (с бытовой техникой)",
            "price": 0,
            "price_type": "included",
            "design_type": ["individual"]
        }),
        new OptionModel({
            "title": "Индивидуальный подбор мебели в стиль интерьера ",
            "price": 25000,
            "price_type": "fixed"
        }),
        new OptionModel({
            "title": "Установка штор <br>(указать кол-во окон)<br>",
            "price": 15000,
            "price_type": "unit"
        }),
        new OptionModel({
            "title": "Отделка балкона",
            "price": 0,
            "price_type": "included",
            "design_type": ["individual"]
        }),
        new OptionModel({
            "title": "Гигиенический душ",
            "price": 2900,
            "price_type": "fixed"
        }),
		 new OptionModel({
            "title": "Установка кухни",
            "price": 0,
            "price_type": "included2"
        }),
    ],
}
/*
    Формулы базовой цены для соответствующих типов дизайна
    max - формула будет активна при площади меньшей max
    formula - сама формула. Используются переменные:
        площадь_квартиры
        площадь_санузлов
        выбран_общий_санузел
        выбран_раздельный_санузел
        площадь_квартиры
		ceiling_cornices

*/


var formulas = {
    'basic': [
        { 
            'max': '30',
            'formula': '((площадь_квартиры-площадь_санузлов)*2470,02705464716 + площадь_санузлов * ((выбран_общий_санузел*21134,2599705666) + (выбран_раздельный_санузел*31441,7646242646)) + 6000 * площадь_квартиры)*1,15*1,05',
        },
		{ 
            'max': '40',
            'formula': '((площадь_квартиры-площадь_санузлов)*2470,02705464716 + площадь_санузлов * ((выбран_общий_санузел*21134,2599705666) + (выбран_раздельный_санузел*31441,7646242646)) + 6000 * площадь_квартиры)*1,15',
        },
        { 
            'max': '60',
            'formula': '((площадь_квартиры-площадь_санузлов)*2610,35452762931 + площадь_санузлов * ((выбран_общий_санузел*18022,9501122769) + (выбран_раздельный_санузел*24408,853919956)) + 5800 * площадь_квартиры)*1,15',
        },
        { 
            'max': '90',
            'formula': '((площадь_квартиры-площадь_санузлов)*2366,55835180084 + площадь_санузлов * ((выбран_общий_санузел*20303,5228940964) + (выбран_раздельный_санузел*28356,8744171765)) + 5500 * площадь_квартиры)*1,15',
        },
        { 
            'max': '9999',
            'formula': '((площадь_квартиры-площадь_санузлов)*2279,23455016765 + площадь_санузлов * ((выбран_общий_санузел*21059,0681580512) + (выбран_раздельный_санузел*31441,7646242646)) + 5400 * площадь_квартиры)*1,15',
        },
    ],
    'designer': [
        { 
            'max': '30',
            'formula': '((площадь_квартиры-площадь_санузлов)*2895,52705464716 + площадь_санузлов * ((выбран_общий_санузел*27245,1578955114) + (выбран_раздельный_санузел*38778,3306138306)) + 6000 * площадь_квартиры)*1,15*1,05  + площадь_квартиры* ceiling_cornices ',
        },
		{ 
            'max': '40',
            'formula': '((площадь_квартиры-площадь_санузлов)*2895,52705464716 + площадь_санузлов * ((выбран_общий_санузел*27245,1578955114) + (выбран_раздельный_санузел*38778,3306138306)) + 6000 * площадь_квартиры)*1,15  + площадь_квартиры* ceiling_cornices ',
        },
        { 
            'max': '60',
            'formula': '((площадь_квартиры-площадь_санузлов)*3035,85452762931 + площадь_санузлов * ((выбран_общий_санузел*23352,8607480464) + (выбран_раздельный_санузел*31557,4650498642)) + 5800 * площадь_квартиры)*1,15  + площадь_квартиры* ceiling_cornices',
        },
        { 
            'max': '90',
            'formula': '((площадь_квартиры-площадь_санузлов)*2670,47497160936 + площадь_санузлов * ((выбран_общий_санузел*25799,8415174626) + (выбран_раздельный_санузел*35060,776866741)) + 5500 * площадь_квартиры  )*1,15+ площадь_квартиры* ceiling_cornices',
        },
        { 
            'max': '9999',
            'formula': '((площадь_квартиры-площадь_санузлов)*2458,62921599244 + площадь_санузлов * ((выбран_общий_санузел*26734,0046545962) + (выбран_раздельный_санузел*38778,3306138306)) + 5400 * площадь_квартиры  )*1,15+ площадь_квартиры* ceiling_cornices',
        },
    ],
    'individual': [
        { 
            'max': '30',
            'formula': '((площадь_квартиры-площадь_санузлов)*2895,52705464716 + площадь_санузлов * ((выбран_общий_санузел*27245,1578955114) + (выбран_раздельный_санузел*38778,3306138306)) + 6000 * площадь_квартиры )*1,15*1,05*1,05 + площадь_квартиры* ceiling_cornices',
        },
		{ 
            'max': '40',
            'formula': '((площадь_квартиры-площадь_санузлов)*2895,52705464716 + площадь_санузлов * ((выбран_общий_санузел*27245,1578955114) + (выбран_раздельный_санузел*38778,3306138306)) + 6000 * площадь_квартиры )*1,15*1,05 + площадь_квартиры* ceiling_cornices',
        },
        { 
            'max': '60',
            'formula': '((площадь_квартиры-площадь_санузлов)*3035,85452762931 + площадь_санузлов * ((выбран_общий_санузел*23352,8607480464) + (выбран_раздельный_санузел*31557,4650498642)) + 5800 * площадь_квартиры )*1,15*1,05 + площадь_квартиры* ceiling_cornices',
        },
        { 
            'max': '90',
            'formula': '((площадь_квартиры-площадь_санузлов)*2670,47497160936 + площадь_санузлов * ((выбран_общий_санузел*25799,8415174626) + (выбран_раздельный_санузел*35060,776866741)) + 5500 * площадь_квартиры )*1,15*1,05 + площадь_квартиры* ceiling_cornices',
        },
        { 
            'max': '9999',
            'formula': '((площадь_квартиры-площадь_санузлов)*2458,62921599244 + площадь_санузлов * ((выбран_общий_санузел*26734,0046545962) + (выбран_раздельный_санузел*38778,3306138306)) + 5400 * площадь_квартиры )*1,15*1,05 + площадь_квартиры* ceiling_cornices',
        },
    ],
}
// Представление опции
var OptionView = Backbone.View.extend({
    className: 'option-order',
    tagName: 'div',
    groupTemplate: jQuery('#group-template').html(),
    opt_template:  jQuery('#opt-template').html(),

    render: function() {
        var groups = {};
        var id = 1;
        for(var group_name in options) {
            var group = options[group_name];
            var group_view = jQuery(_.template(this.groupTemplate)({ 'title': group_name }));
            var area = jQuery('#area').val();
            for(var i in group) {
                var opt = group[i];
                if(opt.get('design_type')) {
                    if(!(url_query.get('type') in opt.get('design_type'))) {
                        continue;
                    } 
                }
				if(opt.get('price_type') == 'unit2') {
                    //opt.set('display_price', 'Цена рассчитывается индивидуально');
                }
				if(opt.get('price_type') == 'included2') {
                    opt.set('display_price', 'Цена рассчитывается индивидуально');
                }
                if(opt.get('price_type') == 'included') {
                    opt.set('display_price', 'Бесплатно (включено)');
                }
                if(opt.get('price_type') == 'area') {
                    opt.set('origin_price', opt.get('price'));
                    opt.set('price', area*opt.get('price'));
                }
                if(!opt.get('display_price')) {
                    opt.set('display_price', print_price(opt.get('price')));
                }
                opt.set('group', group_name);
                opt.set('id', id++);
                var opt_view = jQuery(_.template(this.opt_template)(opt.toJSON()));
                group_view.find('.list-op').append(opt_view);
            }
            groups[group_name] = group_view.html();
        }

        this.$el.html(_.template(option_template, { 'options': groups }));
        return this;
    }
})

// Сериализация опций в JSON для отправки на сервер
function serialize_options() {
    return jQuery('#option_list input[type=checkbox]:checked').map(function() {
        var $this = jQuery(this);
        if($this.hasClass('fix_option')) {
            return { "title": $this.data('title'), "group": $this.data('group'), "price": $this.data('price') };
        } else if ($this.hasClass('num_option')) {
            return { 
                "title": $this.data('title'), 
                "group": $this.data('group'), 
                "unit-price": jQuery('#op'+$this.data('id')+'_num').data('unit-price'), 
                "quantity": prepare_number(jQuery('#op'+$this.data('id')+'_num').val()), 
                "price": jQuery('#op'+$this.data('id')+'_num').data('unit-price')*prepare_number(jQuery('#op'+$this.data('id')+'_num').val()) 
            }
        }
    }).toArray();
}
// Отправка формы
function send_order() {
    if(jQuery(this).hasClass('disabled')) {
        return false;
    }
    if(!validate_form()) {
        return false;
    }
    var data_order = {
        "rooms": prepare_number(jQuery('#rooms').val()),
        "area": prepare_number(jQuery('#area').val()),
        "area_bathrooms": prepare_number(jQuery('#area_bathrooms').val()),
        "bathrooms_type": jQuery('#bathrooms_type').val(),
        "basic_price": basic_price.toFixed(2),
        "option_price": option_price.toFixed(2),
        "total_price": (basic_price + option_price).toFixed(2),
        "address": jQuery('#address').val(),
        "phone": jQuery('#phone').val(),
        "rooms_list": JSON.stringify(rooms),
        "options": JSON.stringify(serialize_options())
    };
    jQuery('.btn-order').addClass('disabled');
    jQuery.ajax({
            url: 'http://produmano.com/wp-content/themes/produmano/form/calcorder.php',
            method: 'post',
            data: data_order,
            success: function(data) {
               // alert(MESS[lang]['order_send_ok']);
                document.location.href = '/spasibo';
            },
            error: function() {
                alert(MESS[lang]["error_send_order"]);
                jQuery('.btn-order').removeClass('disabled');
            }
        });    
    return false;
}
function prepare_number(number) {
    if(!number) {
        return 0;
    }
    number = number.toString();
    if(number[number.length-1] === '.' || number[number.length-1] === ',') {
        number += '0';
    }

    return number.split(',').join('.');
}
// Валидация формы
function validate_form() {
    if(!rooms.length) {
        document.location.href = "/";
        return false;
    }
    var errors = "";
  
    if(!jQuery("#address").val()) {
        jQuery("#address").addClass('error').focus();
        errors += MESS[lang]['enter_address'] + "\n";
    }
    if(!jQuery('#phone').val()) {
        jQuery('#phone').addClass('error');
        if(!errors) {
            jQuery('#phone').focus();
        }
        errors += MESS[lang]['enter_phone'] + "\n";
    }

    if(errors) {
        alert(errors);
        return false;
    }
    return true;
}
// Представление типов комнат
var RoomsTypeListView = Backbone.View.extend({
    tagName: 'div',
    className: 'rooms',

    initialize: function() {
        c_rooms.bind('add', this.add, this);
        c_rooms.bind('remove', this.remove, this);
        Backbone.on('room_render_end', this.repair_titles, this);
    },
    /*
     Вывод блоков с Спальнями
    */
    render: function() {
        this.$el.html('');
        c_rooms.each(function(item) {
            var room = new RoomTypeView({model: item});
            this.$el.append(room.render().$el);
        }, this);
        this.repair_titles();

        return this;
    },

    add: function(new_item, collection) {
        var room = new RoomTypeView({model: new_item});
        var $el = room.render().$el;
        $el.hide();
        this.$el.append(room.render().$el);
        $el.fadeIn();
        this.repair_titles();
    },

    repair_titles: function() {
        var num = 1;
        this.$el.find('.item.type_room h3').each(function() {
            jQuery(this).html('Спальня ' + num);
            var cid = jQuery(this).data('cid');
            c_rooms.get(cid).set('title', 'Спальня ' + num);
            num++;
        });

        if(c_rooms.length > max_rooms) {
            jQuery('.select-design-block .add-item').attr('disabled','disabled').addClass('disabled');
        } else {
            jQuery('.select-design-block .add-item').removeAttr('disabled').removeClass('disabled');
        }
        jQuery('#rooms').val(c_rooms.length-3);

    },
    remove: function() {
        this.$el.find('.room-item:hidden').remove();
        this.repair_titles();
    }
});
// После рендера комнат, в слайдер кинуть выбранные картинки
Backbone.on('room_render_end', function() {
    jQuery('.slider-select-design').html('');
    jQuery('.slider-select-design2').html('');
    var tmpl = _.template(jQuery('#slide-item').html());
    var num = 0;
    c_rooms.each(function(color) {
        var $el = jQuery('<li></li>');
        var obj = color.toJSON();
        if(color.get('type') == 'room') {
            num++;
            obj['title'] = 'Спальня ' + num;
        }
        $el.append(tmpl(obj));
        
        jQuery('.slider-select-design').append($el.clone());
        jQuery('.slider-select-design2').append($el.clone());
    });
    if('slider_select_design' in window) {
        window.slider_select_design.reloadSlider();
        window.slider_select_design2.reloadSlider();
    }
});

function recalc_main() {
    var area = prepare_number(jQuery('#area').val());
    var count_rooms = prepare_number(jQuery('#rooms').val());
    var area_bathrooms = prepare_number(jQuery('#area_bathrooms').val());
    var san = jQuery('#bathrooms_type').val();

    for(var type in formulas) {
        var t_formulas =  _.sortBy( formulas[type], 'max');
        var forumula = false;
        

        for(var i in t_formulas) {
            var f = t_formulas[i];
            if(f['max'] > area) {
                formula = f.formula;
                break;
            }
        }
        if(!formula) {
            throw "Ошибка! Нет формулы под данную площадь.";
        }

        
        var is_common = false;
        var is_separate = false;
        if(san == 'common') {
            is_common = true;
        } else if(san == 'separate') {
            is_separate = true;
        }
        
        var replacements = {
            ',': '.',
            'площадь_квартиры': area,
            'площадь_санузлов': area_bathrooms,
            'выбран_общий_санузел': is_common,
            'выбран_раздельный_санузел': is_separate,
        }

        for(var i in replacements) {
            formula = formula.split(i).join(replacements[i]);
        }

        var b_price = new Function('return ' + formula);
        basic_price = b_price();

        jQuery('.' + type + '_price').html(print_price(basic_price));
    }
}

if(page == 'home') {
    collection.each(function(area){
            var field = new AreaFieldView({model: area});
            jQuery('#area_list').append(field.render().$el);
        }, this);
    var bathroom = jQuery(_.template(jQuery('#t_select_bathroom').html())(url_query.toJSON()));
        bathroom.insertAfter(jQuery('#area_list'))

    recalc_main();
    jQuery('#area_list input').change(recalc_main);
    jQuery('#bathrooms_type').change(recalc_main);
}

jQuery('#ceiling_cornices').on('click', function() { setTimeout(function() { Backbone.trigger('change_cornise'); }, 100); });

jQuery('.slider-select-design-wrap').on('click', '.btn-zoom', function() {
    setTimeout(function() {
        window.slider_select_design2.reloadSlider();
        window.slider_select_design2.goToSlide(window.slider_select_design.getCurrentSlide());
    }, 500);
});