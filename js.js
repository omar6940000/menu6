
    const { createApp, nextTick } = Vue;

    const iconPaths = {
      spark: '<path d="M12 2.6l1.48 5.15L18.7 9.2l-5.22 1.46L12 15.8l-1.48-5.14L5.3 9.2l5.22-1.45L12 2.6Z" fill="currentColor"></path><path d="M18.6 14.2l.78 2.68 2.72.78-2.72.76-.78 2.7-.76-2.7-2.72-.76 2.72-.78.76-2.68Z" fill="currentColor" opacity=".72"></path>',
      star: '<path d="M12 3.3l2.58 5.23 5.77.84-4.17 4.06.98 5.74L12 16.48 6.84 19.2l.98-5.74-4.17-4.06 5.77-.84L12 3.3Z" fill="currentColor"></path>',
      cart: '<path d="M6.2 6.4h13.5l-1.34 7.35a2.25 2.25 0 0 1-2.22 1.85H9.56a2.25 2.25 0 0 1-2.22-1.86L5.65 4.5H3.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 20.1h.05M16.6 20.1h.05" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"></path>',
      arrow: '<path d="M6 12h12M12.8 6.8 18 12l-5.2 5.2" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path>',
      search: '<circle cx="10.8" cy="10.8" r="6.4" fill="none" stroke="currentColor" stroke-width="1.8"></circle><path d="m16 16 4 4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>',
      filter: '<path d="M4 7h16M7 12h10M10 17h4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path><circle cx="15.5" cy="7" r="1.7" fill="currentColor"></circle><circle cx="9" cy="12" r="1.7" fill="currentColor"></circle>',
      sort: '<path d="M8 5v14M8 19l-3-3M8 19l3-3M16 19V5M16 5l-3 3M16 5l3 3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>',
      coin: '<circle cx="12" cy="12" r="8.1" fill="none" stroke="currentColor" stroke-width="1.8"></circle><path d="M14.3 9.2c-.6-.5-1.35-.75-2.22-.75-1.3 0-2.34.65-2.34 1.76 0 2.58 4.9 1.32 4.9 4.18 0 1.17-1.07 2-2.64 2-.96 0-1.92-.31-2.62-.9" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round"></path>',
      close: '<path d="M6.8 6.8 17.2 17.2M17.2 6.8 6.8 17.2" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"></path>',
      plus: '<path d="M12 5.5v13M5.5 12h13" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"></path>',
      leaf: '<path d="M19.5 4.6C11.8 4.4 6.4 8.7 5.4 15.8c4.9.8 11.2-1.7 14.1-11.2Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"></path><path d="M5.3 15.8c3.8-1.3 7.1-3.7 10-7.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>'
    };

    const menuItems = [
      {
        id: 1,
        category: 'signature',
        title: 'منسف الزعفران المدخن',
        label: 'توقيع الشيف',
        description: 'لحم طري، أرز زعفران، لبن جميد مخملي، ودخان خشب خفيف.',
        longDescription: 'إعادة تخيل للمنسف العربي بتقديم سينمائي: كتف لحم مطهو ببطء، أرز زعفران دافئ، لبن جميد متوازن، ولمسة دخان ناعمة تظهر عند التقديم.',
        price: 92,
        rating: 4.9,
        featured: true,
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1400&q=85',
        ingredients: ['لحم مطهو ببطء', 'زعفران', 'جميد', 'صنوبر', 'دخان خشب'],
        tags: ['منسف', 'زعفران', 'لحم', 'توقيع']
      },
      {
        id: 2,
        category: 'grills',
        title: 'ريش غنم بالتمر الأسود',
        label: 'جمر فاخر',
        description: 'ريش مشوية على جمر هادئ مع دبس تمر أسود وفلفل حلو.',
        longDescription: 'ريش غنم مختارة تتشرب دبس التمر الأسود قبل دخولها إلى الجمر، تقدم مع صلصة بنية لامعة وخضار موسمية مشوية.',
        price: 118,
        rating: 4.8,
        featured: true,
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1400&q=85',
        ingredients: ['ريش غنم', 'دبس تمر', 'فلفل حلو', 'سماق', 'زبدة بنية'],
        tags: ['مشاوي', 'ريش', 'تمر', 'جمر']
      },
      {
        id: 3,
        category: 'mezze',
        title: 'كبّة الياقوت النيئة',
        label: 'مقبل بارد',
        description: 'قمح ناعم، لحم متبل، زيت زيتون جبلي، ورذاذ رمان.',
        longDescription: 'كبّة باردة بتوازن فاخر بين الحموضة والبهارات، تقدم كقرص ناعم مع زيت زيتون جبلي ورمان مكثف.',
        price: 54,
        rating: 4.7,
        featured: false,
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1400&q=85',
        ingredients: ['قمح ناعم', 'لحم متبل', 'رمان', 'نعناع', 'زيت زيتون'],
        tags: ['كبة', 'مقبلات', 'رمان']
      },
      {
        id: 4,
        category: 'mezze',
        title: 'حمص اللوز المحمص',
        label: 'نباتي',
        description: 'حمص كريمي مع طحينة بيضاء، لوز محمص، وزيت بابريكا.',
        longDescription: 'حمص ناعم بتركيبة غنية من الطحينة البيضاء والليمون، يتوج باللوز المحمص وزيت بابريكا دافئ.',
        price: 38,
        rating: 4.6,
        featured: false,
        image: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=1400&q=85',
        ingredients: ['حمص', 'طحينة', 'لوز', 'بابريكا', 'ليمون'],
        tags: ['حمص', 'نباتي', 'طحينة', 'مقبلات']
      },
      {
        id: 5,
        category: 'seafood',
        title: 'أرز الصيادية بالهامور',
        label: 'بحر عربي',
        description: 'هامور محمر، أرز بصل بني، صلصة طحينة بحرية، وليمون أسود.',
        longDescription: 'صيادية بلمسة فاخرة: هامور محمر على أرز مشبع بالبصل البني والبهارات البحرية، مع صلصة طحينة خفيفة ولمسة ليمون أسود.',
        price: 88,
        rating: 4.8,
        featured: true,
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1400&q=85',
        ingredients: ['هامور', 'أرز بسمتي', 'بصل بني', 'طحينة', 'ليمون أسود'],
        tags: ['بحريات', 'سمك', 'صيادية', 'هامور']
      },
      {
        id: 6,
        category: 'seafood',
        title: 'روبيان اللؤلؤ بالكزبرة',
        label: 'مقلاة حارة',
        description: 'روبيان سريع على نار عالية مع كزبرة، ثوم، وزبدة ليمون.',
        longDescription: 'روبيان كبير يطهى بسرعة على نار عالية للحفاظ على عصيريته، مع زبدة ليمون وكزبرة خضراء ونكهة ثوم محمصة.',
        price: 96,
        rating: 4.7,
        featured: false,
        image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1400&q=85',
        ingredients: ['روبيان', 'كزبرة', 'ثوم', 'زبدة ليمون', 'شطة ناعمة'],
        tags: ['روبيان', 'بحريات', 'كزبرة']
      },
      {
        id: 7,
        category: 'grills',
        title: 'مشاوي أطلس الملكية',
        label: 'مشاركة',
        description: 'تشكيلة كباب، أوصال، شيش طاووق، وخبز تنور ساخن.',
        longDescription: 'لوحة مشاركة فاخرة تضم كبابا متبلا، أوصالا طرية، شيش طاووق باللبن، وخبز تنور يخرج ساخنا مع صلصات عربية.',
        price: 135,
        rating: 4.9,
        featured: true,
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1400&q=85',
        ingredients: ['كباب', 'أوصال', 'شيش طاووق', 'خبز تنور', 'صلصات'],
        tags: ['مشاوي', 'كباب', 'مشاركة', 'لحم']
      },
      {
        id: 8,
        category: 'mezze',
        title: 'فتّة باذنجان مدخنة',
        label: 'دافئ',
        description: 'باذنجان مشوي، لبن ثوم، خبز مقرمش، ودبس رمان.',
        longDescription: 'فتة دافئة تجمع طبقات الباذنجان المدخن واللبن بالثوم والخبز المقرمش، مع دبس رمان يضيف لمعانا وحموضة.',
        price: 47,
        rating: 4.7,
        featured: false,
        image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=1400&q=85',
        ingredients: ['باذنجان', 'لبن', 'ثوم', 'خبز مقرمش', 'دبس رمان'],
        tags: ['فتة', 'باذنجان', 'مقبلات']
      },
      {
        id: 9,
        category: 'drinks',
        title: 'قهوة عربية باردة بالهيل',
        label: 'بارد',
        description: 'استخلاص بارد للقهوة العربية مع هيل أخضر ورغوة تمر.',
        longDescription: 'قهوة عربية مستخلصة على البارد لمدة طويلة، تقدم مع هيل أخضر ورغوة تمر خفيفة لختام منعش أو بداية فاخرة.',
        price: 24,
        rating: 4.8,
        featured: false,
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1400&q=85',
        ingredients: ['قهوة عربية', 'هيل', 'تمر', 'ثلج شفاف'],
        tags: ['قهوة', 'هيل', 'مشروبات']
      },
      {
        id: 10,
        category: 'drinks',
        title: 'موهيتو تمر هندي',
        label: 'فوار',
        description: 'تمر هندي، نعناع طازج، ليمون، وفقاعات معدنية ناعمة.',
        longDescription: 'مشروب فوار بحموضة التمر الهندي وانتعاش النعناع، يوازن الأطباق الدهنية والمشاوي المدخنة.',
        price: 28,
        rating: 4.7,
        featured: false,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1400&q=85',
        ingredients: ['تمر هندي', 'نعناع', 'ليمون', 'ماء فوار'],
        tags: ['تمر هندي', 'موهيتو', 'مشروبات']
      },
      {
        id: 11,
        category: 'drinks',
        title: 'لبن زعفران فوار',
        label: 'ناعم',
        description: 'لبن خفيف، زعفران، ماء ورد، وفقاعات دقيقة.',
        longDescription: 'لبن عربي خفيف يعاد تقديمه بفقاعات دقيقة وزعفران وماء ورد، مناسب بعد الأطباق الحارة.',
        price: 26,
        rating: 4.6,
        featured: false,
        image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1400&q=85',
        ingredients: ['لبن', 'زعفران', 'ماء ورد', 'ثلج', 'فقاعات'],
        tags: ['لبن', 'زعفران', 'مشروبات']
      },
      {
        id: 12,
        category: 'desserts',
        title: 'كنافة الفستق الذهبية',
        label: 'حلوى ساخنة',
        description: 'كنافة مقرمشة، جبن ناعم، فستق حلبي، وقطر ورد.',
        longDescription: 'كنافة ساخنة بقوام مقرمش وقلب ناعم، تقدم مع فستق حلبي مطحون وقطر ورد خفيف لا يطغى على النكهة.',
        price: 42,
        rating: 4.9,
        featured: true,
        image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=1400&q=85',
        ingredients: ['كنافة', 'جبن', 'فستق', 'قطر ورد'],
        tags: ['كنافة', 'فستق', 'حلويات']
      },
      {
        id: 13,
        category: 'desserts',
        title: 'لقيمات الكراميل المملح',
        label: 'مقرمش',
        description: 'لقيمات ذهبية مع كراميل مملح، سمسم، وهيل ناعم.',
        longDescription: 'لقيمات خفيفة ومقرمشة من الخارج، تغطى بكراميل مملح دافئ ولمسة هيل وسمسم محمص.',
        price: 36,
        rating: 4.8,
        featured: false,
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1400&q=85',
        ingredients: ['لقيمات', 'كراميل مملح', 'سمسم', 'هيل'],
        tags: ['لقيمات', 'كراميل', 'حلويات']
      },
      {
        id: 14,
        category: 'desserts',
        title: 'مهلبية ماء الورد',
        label: 'بارد',
        description: 'مهلبية ناعمة، ماء ورد، فستق مطحون، وبتلات مجففة.',
        longDescription: 'مهلبية باردة بقوام حريري، مع ماء ورد رقيق وفستق مطحون وبتلات ورد مجففة لتجربة خفيفة.',
        price: 34,
        rating: 4.6,
        featured: false,
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1400&q=85',
        ingredients: ['حليب', 'ماء ورد', 'فستق', 'بتلات ورد'],
        tags: ['مهلبية', 'ماء ورد', 'حلويات']
      },
      {
        id: 15,
        category: 'offers',
        title: 'كومبو ليالي نجد',
        label: 'لشخصين',
        description: 'مشاوي أطلس، فتة باذنجان، موهيتو تمر هندي، وكنافة ذهبية.',
        longDescription: 'رحلة مكتملة لشخصين تجمع المشاوي والمقبل الدافئ والمشروب الفوار والحلوى الساخنة في مسار واحد.',
        price: 159,
        rating: 4.9,
        featured: false,
        image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=1400&q=85',
        ingredients: ['مشاوي', 'فتة', 'موهيتو', 'كنافة'],
        tags: ['كومبو', 'عرض', 'مشاوي']
      },
      {
        id: 16,
        category: 'offers',
        title: 'رحلة المازات الباردة',
        label: 'مشاركة خفيفة',
        description: 'حمص اللوز، كبّة الياقوت، سلطة رمان، وخبز تنور.',
        longDescription: 'مسار خفيف للمشاركة يجمع المقبلات الباردة والخبز الساخن في تجربة مناسبة لبداية طويلة.',
        price: 74,
        rating: 4.7,
        featured: false,
        image: 'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?auto=format&fit=crop&w=1400&q=85',
        ingredients: ['حمص', 'كبة', 'سلطة', 'خبز تنور'],
        tags: ['مازات', 'عرض', 'مقبلات']
      },
      {
        id: 17,
        category: 'signature',
        title: 'برياني كتف الضأن',
        label: 'أرز عطري',
        description: 'كتف ضأن يتفكك بالملعقة فوق أرز برياني مع لومي وزبيب.',
        longDescription: 'كتف ضأن مطهو ببطء حتى يصبح طريا جدا، يقدم فوق أرز برياني عطري مع لومي أسود وزبيب ومكسرات محمصة.',
        price: 103,
        rating: 4.8,
        featured: true,
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1400&q=85',
        ingredients: ['كتف ضأن', 'أرز برياني', 'لومي', 'زبيب', 'مكسرات'],
        tags: ['برياني', 'ضأن', 'أرز', 'توقيع']
      },
      {
        id: 18,
        category: 'mezze',
        title: 'سلطة الجرجير والرمان',
        label: 'نباتي',
        description: 'جرجير، رمان، جبن مالح خفيف، ودبس رمان معتق.',
        longDescription: 'سلطة منعشة توازن بين مرارة الجرجير وحلاوة الرمان وحموضة الدبس المعتق، مع جبن مالح خفيف.',
        price: 41,
        rating: 4.5,
        featured: false,
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1400&q=85',
        ingredients: ['جرجير', 'رمان', 'جبن مالح', 'دبس رمان'],
        tags: ['سلطة', 'جرجير', 'نباتي', 'رمان']
      }
    ];

    const categories = [
      { key: 'all', title: 'الكل', hint: 'المشهد الكامل' },
      { key: 'signature', title: 'التواقيع', hint: 'أطباق الدار' },
      { key: 'grills', title: 'الجمر', hint: 'مشاوي فاخرة' },
      { key: 'seafood', title: 'البحر', hint: 'نكهة ساحلية' },
      { key: 'mezze', title: 'المقبلات', hint: 'بدايات ذكية' },
      { key: 'drinks', title: 'المشروبات', hint: 'برودة عطرية' },
      { key: 'desserts', title: 'الحلويات', hint: 'خاتمة ناعمة' },
      { key: 'offers', title: 'العروض', hint: 'رحلات جاهزة' }
    ];

    function normalizeArabic(value) {
      return String(value || '')
        .toLowerCase()
        .replace(/[أإآ]/g, 'ا')
        .replace(/ة/g, 'ه')
        .replace(/ى/g, 'ي')
        .replace(/[ًٌٍَُِّْـ]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    }

    const SvgIcon = {
      props: { name: { type: String, required: true } },
      computed: {
        icon() {
          return iconPaths[this.name] || iconPaths.spark;
        }
      },
      template: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true" v-html="icon"></svg>'
    };

    const CategorySpectrum = {
      props: {
        categories: { type: Array, required: true },
        activeCategory: { type: String, required: true }
      },
      emits: ['select'],
      template: `
        <div class="category-spectrum" data-aos="fade-up" data-aos-delay="100">
          <button
            v-for="category in categories"
            :key="category.key"
            class="category-node"
            :class="{'is-active': activeCategory === category.key}"
            type="button"
            @click="$emit('select', category.key)">
            <span class="category-count">{{ category.count }} عنصر</span>
            <span class="category-title">{{ category.title }}</span>
            <span class="category-hint">{{ category.hint }}</span>
          </button>
        </div>
      `
    };

    const MenuItem = {
      components: { SvgIcon },
      props: { item: { type: Object, required: true } },
      emits: ['open', 'add'],
      methods: {
        price(value) {
          return new Intl.NumberFormat('ar-SA', { style: 'currency', currency: 'SAR', maximumFractionDigits: 0 }).format(value);
        }
      },
      template: `
        <article class="menu-tile" data-aos="fade-up">
          <div class="tile-media">
            <img :src="item.image" :alt="item.title" loading="lazy">
            <span class="tile-label">
              <svg-icon :name="item.label === 'نباتي' ? 'leaf' : 'spark'"></svg-icon>
              {{ item.label }}
            </span>
          </div>
          <div class="tile-body">
            <div class="tile-meta">
              <span class="rating"><svg-icon name="star"></svg-icon>{{ item.rating }}</span>
              <span class="price">{{ price(item.price) }}</span>
            </div>
            <h3 class="tile-title">{{ item.title }}</h3>
            <p class="tile-description">{{ item.description }}</p>
            <div class="tile-actions">
              <button class="details-button" type="button" @click="$emit('open', item)">تفاصيل الطبق</button>
              <button class="add-plate" type="button" :aria-label="'إضافة ' + item.title" @click="$emit('add', item)">
                <svg-icon name="plus"></svg-icon>
              </button>
            </div>
          </div>
        </article>
      `
    };

    const FeaturedSlider = {
      components: { SvgIcon },
      props: { slides: { type: Array, required: true } },
      emits: ['open', 'add'],
      methods: {
        price(value) {
          return new Intl.NumberFormat('ar-SA', { style: 'currency', currency: 'SAR', maximumFractionDigits: 0 }).format(value);
        }
      },
      mounted() {
        this.$nextTick(() => {
          new Swiper(this.$refs.swiper, {
            slidesPerView: 1,
            speed: 1100,
            loop: true,
            grabCursor: true,
            effect: 'creative',
            creativeEffect: {
              prev: { translate: ['8%', 0, -180], opacity: 0.42 },
              next: { translate: ['-8%', 0, -180], opacity: 0.42 }
            },
            autoplay: { delay: 4300, disableOnInteraction: false },
            pagination: { el: this.$refs.pagination, clickable: true },
            navigation: { nextEl: this.$refs.next, prevEl: this.$refs.prev }
          });
        });
      },
      template: `
        <div class="featured-swiper" data-aos="fade-up">
          <div class="swiper" ref="swiper" dir="rtl">
            <div class="swiper-wrapper">
              <article
                class="swiper-slide featured-slide"
                v-for="meal in slides"
                :key="meal.id"
                :style="{ backgroundImage: 'url(' + meal.image + ')' }">
                <div class="featured-copy">
                  <span class="featured-label"><svg-icon name="star"></svg-icon>{{ meal.label }}</span>
                  <h3 class="featured-title">{{ meal.title }}</h3>
                  <p class="featured-desc">{{ meal.description }}</p>
                  <div class="featured-bottom">
                    <span class="offer-price">{{ price(meal.price) }}</span>
                    <button class="primary-action" type="button" @click="$emit('open', meal)">افتح التجربة</button>
                    <button class="ghost-action" type="button" @click="$emit('add', meal)">
                      <svg-icon name="cart"></svg-icon>
                      أضف للطلب
                    </button>
                  </div>
                </div>
              </article>
            </div>
            <div class="swiper-pagination" ref="pagination"></div>
          </div>
          <div class="swiper-controls">
            <button class="swiper-button-custom" ref="prev" type="button" aria-label="السابق"><svg-icon name="arrow"></svg-icon></button>
            <button class="swiper-button-custom" ref="next" type="button" aria-label="التالي"><svg-icon name="arrow"></svg-icon></button>
          </div>
        </div>
      `
    };

    const ShowcaseSection = {
      components: { SvgIcon },
      props: {
        kind: { type: String, required: true },
        items: { type: Array, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        reversed: { type: [Boolean, String], default: false }
      },
      emits: ['open'],
      methods: {
        price(value) {
          return new Intl.NumberFormat('ar-SA', { style: 'currency', currency: 'SAR', maximumFractionDigits: 0 }).format(value);
        }
      },
      computed: {
        heroItem() {
          return this.items[0] || {};
        },
        isReversed() {
          return this.reversed === true || this.reversed === 'true';
        }
      },
      template: `
        <div class="showcase-ribbon" :class="{'is-reversed': isReversed}">
          <article class="showcase-lead" :style="{ backgroundImage: 'url(' + heroItem.image + ')' }" data-aos="fade-up">
            <div class="showcase-lead-content">
              <span class="featured-label"><svg-icon name="spark"></svg-icon>{{ kind === 'drinks' ? 'بار عربي' : 'حلوى الدار' }}</span>
              <h3>{{ title }}</h3>
              <p>{{ description }}</p>
            </div>
          </article>
          <div class="mini-menu">
            <article class="mini-item" v-for="item in items" :key="item.id" data-aos="fade-up">
              <img :src="item.image" :alt="item.title" loading="lazy">
              <div>
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
              </div>
              <span class="mini-price">{{ price(item.price) }}</span>
              <button class="action-button" type="button" :aria-label="'فتح ' + item.title" @click="$emit('open', item)">
                <svg-icon name="arrow"></svg-icon>
              </button>
            </article>
          </div>
        </div>
      `
    };

    createApp({
      components: {
        SvgIcon,
        CategorySpectrum,
        MenuItem,
        FeaturedSlider,
        ShowcaseSection
      },
      data() {
        return {
          navLinks: [
            { label: 'الفئات', target: 'categories' },
            { label: 'البحث', target: 'menu' },
            { label: 'المميز', target: 'featured' },
            { label: 'المشروبات', target: 'drinks' },
            { label: 'الحلويات', target: 'desserts' },
            { label: 'العروض', target: 'offers' }
          ],
          categories,
          menuItems,
          activeCategory: 'all',
          searchQuery: '',
          maxPrice: 180,
          sortBy: 'signature',
          signatureOnly: false,
          selectedMeal: null,
          cartCount: 0,
          cartPulse: false,
          lastAdded: null,
          toastTimer: null
        };
      },
      computed: {
        categoriesWithCounts() {
          return this.categories.map((category) => {
            const count = category.key === 'all'
              ? this.menuItems.length
              : this.menuItems.filter((item) => item.category === category.key).length;
            return { ...category, count };
          });
        },
        filteredItems() {
          const query = normalizeArabic(this.searchQuery);
          const filtered = this.menuItems.filter((item) => {
            const categoryMatch = this.activeCategory === 'all' || item.category === this.activeCategory;
            const priceMatch = item.price <= this.maxPrice;
            const signatureMatch = !this.signatureOnly || item.featured;
            const searchText = normalizeArabic([
              item.title,
              item.description,
              item.longDescription,
              item.label,
              item.tags.join(' '),
              this.categoryTitle(item.category)
            ].join(' '));

            return categoryMatch && priceMatch && signatureMatch && (!query || searchText.includes(query));
          });

          return filtered.sort((a, b) => {
            if (this.sortBy === 'priceAsc') return a.price - b.price;
            if (this.sortBy === 'priceDesc') return b.price - a.price;
            if (this.sortBy === 'rating') return b.rating - a.rating;
            return Number(b.featured) - Number(a.featured) || b.rating - a.rating;
          });
        },
        featuredMeals() {
          return this.menuItems.filter((item) => item.featured);
        }
      },
      watch: {
        filteredItems() {
          nextTick(() => {
            if (window.AOS) AOS.refreshHard();
            if (window.ScrollTrigger) ScrollTrigger.refresh();
          });
        }
      },
      methods: {
        setCategory(category) {
          this.activeCategory = category;
          this.scrollToSection('menu');
        },
        itemsByCategory(category) {
          return this.menuItems.filter((item) => item.category === category);
        },
        categoryTitle(key) {
          return (this.categories.find((category) => category.key === key) || {}).title || key;
        },
        formatPrice(value) {
          return new Intl.NumberFormat('ar-SA', { style: 'currency', currency: 'SAR', maximumFractionDigits: 0 }).format(value);
        },
        resetFilters() {
          this.activeCategory = 'all';
          this.searchQuery = '';
          this.maxPrice = 180;
          this.sortBy = 'signature';
          this.signatureOnly = false;
        },
        openMeal(meal) {
          this.selectedMeal = meal;
          document.body.classList.add('modal-open');
          nextTick(() => {
            gsap.fromTo('.modal-panel', { y: 28, scale: 0.98 }, { y: 0, scale: 1, duration: 0.7, ease: 'power3.out' });
          });
        },
        closeModal() {
          this.selectedMeal = null;
          document.body.classList.remove('modal-open');
        },
        addToCart(item) {
          this.cartCount += 1;
          this.cartPulse = true;
          this.lastAdded = item;
          window.clearTimeout(this.toastTimer);
          this.toastTimer = window.setTimeout(() => {
            this.lastAdded = null;
            this.cartPulse = false;
          }, 2300);
        },
        scrollToSection(id) {
          const target = document.getElementById(id);
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        },
        handleKeydown(event) {
          if (event.key === 'Escape' && this.selectedMeal) this.closeModal();
        },
        runMotion() {
          gsap.registerPlugin(ScrollTrigger);

          gsap.from('.creative-navbar', {
            y: -26,
            opacity: 0,
            duration: 1,
            delay: 0.55,
            ease: 'power3.out'
          });

          gsap.from(['.hero-brand', '.hero-statement', '.hero-support', '.hero-actions'], {
            y: 42,
            opacity: 0,
            duration: 1.15,
            delay: 0.85,
            stagger: 0.12,
            ease: 'power4.out'
          });

          gsap.to('.hero-section', {
            backgroundPosition: 'center 58%',
            ease: 'none',
            scrollTrigger: {
              trigger: '.hero-section',
              start: 'top top',
              end: 'bottom top',
              scrub: true
            }
          });

          gsap.utils.toArray('.section-title').forEach((title) => {
            gsap.from(title, {
              yPercent: 18,
              opacity: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: { trigger: title, start: 'top 82%' }
            });
          });

          gsap.utils.toArray('.menu-tile .tile-body').forEach((body) => {
            gsap.to(body, {
              y: -22,
              ease: 'none',
              scrollTrigger: { trigger: body, start: 'top bottom', end: 'bottom top', scrub: 1.4 }
            });
          });

          gsap.to('.footer-brand', {
            letterSpacing: '-0.02em',
            ease: 'none',
            scrollTrigger: { trigger: '.menu-footer', start: 'top bottom', end: 'bottom bottom', scrub: true }
          });
        }
      },
      mounted() {
        AOS.init({ duration: 850, easing: 'ease-out-cubic', once: true, offset: 80 });
        window.addEventListener('keydown', this.handleKeydown);
        window.addEventListener('pointermove', (event) => {
          document.documentElement.style.setProperty('--cursor-x', event.clientX + 'px');
          document.documentElement.style.setProperty('--cursor-y', event.clientY + 'px');
        }, { passive: true });

        nextTick(() => this.runMotion());
      },
      beforeUnmount() {
        window.removeEventListener('keydown', this.handleKeydown);
      }
    }).mount('#app');

    window.addEventListener('load', () => {
      const loader = document.getElementById('loader');
      if (!loader) return;

      gsap.timeline({ delay: 0.35 })
        .to('.loader-core', { scale: 0.96, opacity: 0, duration: 0.65, ease: 'power3.inOut' })
        .to(loader, {
          opacity: 0,
          filter: 'blur(18px) scale(1.04)',
          duration: 0.8,
          ease: 'power3.inOut',
          onComplete: () => loader.classList.add('is-hidden')
        }, '-=0.2');
    });
  