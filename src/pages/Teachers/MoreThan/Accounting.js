import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../../../assets/images/Shabake.jpg";
function Accounting() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col sm={12} md={4} lg={3} className="my-3">
            <Card className="bg-info fixed-style">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Link
                    className="text-decoration-none text-dark"
                    target="blank"
                    to={"/networkAndSoftware"}
                  >
                    رشته شبکه و نرم‌افزار
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link
                    className="text-decoration-none text-dark"
                    target="blank"
                    to={"/electrotechnic"}
                  >
                    رشته الکتروتکنیک
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link
                    className="text-decoration-none text-dark"
                    to={"/teachers"}
                  >
                    هنرآموزان
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link
                    className="text-decoration-none text-dark"
                    target="blank"
                    to={"/honors"}
                  >
                    افتخارات
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link
                    className="text-decoration-none text-dark"
                    to={"/aboutUs"}
                  >
                    درباره هنرستان
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col sm={12} md={8} lg={9} className="my-3">
            <h2 className="p-5 fw-bold">رشته حسابداری</h2>
            <div className="text-center">
              <img src={image} alt="" className="img-fluid rounded shadow" />
            </div>
            <p className="p-5 text-justify my-4">
              بسیاری از دانش آموزان پایه نهم که برای دهم انتخاب رشته می کنند،
              رشته حسابداری را در گوشه ذهن خود داشته و به بررسی آن به عنوان یکی
              از گزینه های ادامه تحصیل می پردازند.
              <br />
              <br />
              قطعا حسابداری نیز مانند دیگر علوم فنی از آغاز روزهای پیدایش انسان
              به وجود آمده است. رشته حسابداری با گسترش کسب و کار ها و خدمات و
              نیز دانش و تکنولوژی در خدمت توسعه ی کشور ها در تمامی زمینه ها در
              آمده است.
              <br />
              <br />
              حسابداری در واقع با انتقال اطلاعات مالی به دیگران به نوعی زبان
              تجارت می باشد.
              <br />
              <br />
              می توان گفت که حسابداری به نوعی یک سیستم جمع آوری اطلاعات، ثبت،
              طبقه بندی، خلاصه کردن داده ها و ارائه ی گزارش های مالی است که در
              اشکال متفاوت انجام می شود.
              <br />
              <br />
              حسابداری در مشاغل مختلفی همچون سازمان های دولتی، موسسات و نهاد ها
              کاربرد دارد. همچنین، حسابداری حتی برای تجزیه و تحلیل و دسته بندی
              اطلاعات اقتصادی افراد کاربرد دارد و به افراد کمک شایانی می کند.
              <br />
              <br />
              حسابداری می تواند نقش مهمی در تقسیم بندی و توزیع منابع مالی داشته
              باشد. همچنین ماهیت اقتصادی حسابداری در عین خصلت های آماری روش های
              آن سبب شده تا سر و کار حسابداری با پول باشد.
              <br />
              <br />
              علاوه بر این حسابدار باید با امانت داری و رازداری همراه باشد.
              امانت داردی و رازداری یکی از ویژگی های مهم یک حسابدار است و یک
              حسابدار باید انسان امینی باشد.
              <br />
              <br />
              رشته حسابداری هنرستان از شاخه های فنی و حرفه ای است. شما می توانید
              تحصیل در این رشته را تا مقاطع بالاتر ادامه دهید.
            </p>
            <h5 className="px-5 py-1">لیست دروس رشته حسابداری</h5>
            <Col sm={12} className="px-5 py-1">
              <Card className="bg-info fixed-style">
                <Card.Header className="text-dark">
                  <b>
                    رشته حسابداری هنرستان مانند سایر رشته ها دارای دروس تخصصی و
                    عمومی است. دروس تخصصی رشته حسابداری عبارتند از:
                  </b>
                </Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item className="p-3">
                    حسابداری حقوق و دستمزد
                  </ListGroup.Item>
                  <ListGroup.Item className="p-3">دانش فنی پایه</ListGroup.Item>
                  <ListGroup.Item className="p-3">
                    همراه هنرجو حسابداری
                  </ListGroup.Item>
                  <ListGroup.Item className="p-3">مدیریت تولید</ListGroup.Item>
                  <ListGroup.Item className="p-3">
                    دانش فنی تخصصی حسابداری
                  </ListGroup.Item>
                  <ListGroup.Item className="p-3">
                    حسابداری تهیه تنظیم
                  </ListGroup.Item>
                  <ListGroup.Item className="p-3">
                    حسابداری بهای تمام شده و مالیاتی
                  </ListGroup.Item>
                  <ListGroup.Item className="p-3">
                    حسابداری اموال و انبار
                  </ListGroup.Item>
                  <ListGroup.Item className="p-3">
                    حسابداری وجوه نقد و تحریر دفاتر قانونی
                  </ListGroup.Item>
                  <ListGroup.Item className="p-3">
                    حسابداری خرید و فروش
                  </ListGroup.Item>
                  <ListGroup.Item className="p-3">ارتباط موثر</ListGroup.Item>
                  <ListGroup.Item className="p-3">دانش فنی پایه</ListGroup.Item>
                  <ListGroup.Item className="p-3">
                    حسابداری تهیه و تنظیم صورت های مالی
                  </ListGroup.Item>
                  <ListGroup.Item className="p-3">
                    شرایط لازم برای ورود به رشته حسابداری
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
            <p className="px-5 pt-3">
              از جمله شرایطی که لازمه ی ورود به رشته حسابداری هنرستان است،
              عبارتند از:
              <br />
              <br />
              <b>کارنامه ی قبولی در پایه نهم</b>
              <p>
                داشتن شرایط ورود به رشته ی فنی و حرفه ای که در فرم هدایت تحصیلی
                مثبت شده است.
              </p>
              <br />
              <br />
            </p>
            <Col sm={12} className="px-5 pb-2 pt-0">
              <Card className="bg-info fixed-style">
                <Card.Header className="text-dark">
                  برای ورود به رشته حسابداری که در شاخه رشته های خدماتی گروه فنی
                  حرفه ای قرار دارد داشتن نمرات لازم برای ورود به این رشته
                  الزامی است. نمرات موثر از سه سال اول دوره متوسطه در نظر گرفته
                  می شود که نمرات پایان ترم نهم با ضریب ۳ لحاظ می شود. حداقل
                  نمرات در نظر گرفته شده برای ورود به رشته حسابداری در شاخه فنی
                  حرفه ای به شرح زیر است:
                </Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item className="p-3">
                    فرهنگ و هنر ۱۲
                  </ListGroup.Item>
                  <ListGroup.Item className="p-3">
                    کار و فناوری ۱۲
                  </ListGroup.Item>
                  <ListGroup.Item className="p-3">ریاضی ۱۰</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
            <p className="p-5 text-justify">
              علاوه بر داشتن سقف نمرات لازم فرد در آزمون های استعداد تحصیلی و
              شغلی که در دوره اول از فرد گرفته می شود باید امتیاز لازم را کسب
              کند. داشتن علاقه به رشته حسابداری و اولویت دادن به این رشته در
              زمان انتخاب رشته احتمال ورود فرد به این رشته را افزایش می دهد .
              <br />
              <br />
            </p>
            <b className="px-5">ادامه تحصیل در رشته حسابداری</b>
            <Col sm={12} className="px-5 pb-2 pt-4">
              <Card className="bg-info fixed-style">
                <Card.Header className="text-dark">
                  برای ادامه تحصیل در رشته ی حسابداری می توانید از طریق سه روش
                  اقدام کنید. این روش ها عبارتند از:
                </Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item className="p-3">
                    شرکت در آزمون کاردانی و ورود به دانشگاه های فنی و حرفه ای و
                    اخذ مدرک پس از ۲ سال
                  </ListGroup.Item>
                  <ListGroup.Item className="p-3">
                    شرکت در آزمون ورود به دانشگاه رشته های نظری ( رشته ریاضی،
                    رشته علوم تجربی، رشته انسانی، رشته هنر و رشته زبان) و اخذ
                    مدرک پس از ۴ سال
                  </ListGroup.Item>
                  <ListGroup.Item className="p-3">
                    تحصیل بدون کنکور در دانشگاه های بدون کنکور مانند آزاد و علمی
                    کاربردی در هر دو مقطع کاردانی و کارشناسی
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
            <div className="text-center p-3">
              <img src={image} alt="" className="shadow img-fluid rounded" />
            </div>
            <h4 className="pt-5 pb-2 px-5 fw-bold">اینده شغلی رشته حسابداری</h4>
            <p className="pb-5 px-5 text-justify">
              حسابداری رشته ای پرطرفدار است. تقریبا تمامی شرکت ها و ارگان ها
              نیاز به حسابدار دارند تا بتوانند امور مالی خود را ثبت و طبقه بندی
              نمایند.
              <br />
              <br />
              حتی بانک ها هم رشته حسابداری را جز اولین های داوطلبان استخدامی خود
              قرار می دهند و از این افراد نیرو می گیرند. به جرات می توان گفت که
              حتی فارغ التحصیلان رشته حسابداری هنرستان نیز می توانند وارد بازار
              کار شده و در کنار کار ادامه تحصیل نیز دهند .
              <br />
              <br />
              آینده شغلی رشته حسابداری در ایران کاملا روشن است. همین حالا، درصد
              بالایی از فارغ التحصیلان گرایش‌های حسابداری، جذب کار می‌شوند.
              استخدام حسابدار، از فارغ التحصیلان هنرستانی، دانشگاهی و آموزشگاهی
              همیشه وجود دارد. آینده شغلی حسابداری با راه‌هایی که برای کسب درآمد
              بیشتر و گرفتن فرصت‌های شغلی بهتر وجود دارد، روشن است. استخدام
              حسابداران خبره و متخصص، در تمامی شرکت‌ها، کارخانجات و واحدهای
              تولیدی و صنعتی رایج است. حتی با گذراندن دوره‌های تخصصی مانند
              حسابداری صنعتی، حسابداری پیمانکاری، حسابداری مالی، حسابداری
              مالیاتی و حسابرسی می‌توانید برای گرفتن شغل‌های بهتر، تلاش کنید. با
              داشتن رزومه حسابداری خوب و موفق می‌توانید شانس خودتان را برای کسب
              مشاغل بهتر افزایش دهید.
              <br />
              <br />
              <b>
                جایگاه رشته حسابداری در جهان بسیار ارزشمند می‌باشد با توجه به
                دنیای امروز پول و ثروت از ارکان زندگی همه انسان‌هاست و حسابداری
                از اموال و پول از جایگاه بسیار بالایی برخوردار است همواره برای
                حسابداری ثروت و پول نیازمند حسابداران خبره و کار بلد خواهیم بود
                به همین خاطر هر کسب‌ و کاری از کوچک تا بزرگ و اشخاص گرفته برای
                اینکه به امور مالی آنها رسیدگی شود نیاز به یک یا چند حسابدار کار
                کشته خواهند داشت و فارغ‌التحصیلان و دارندگان مدرک حسابداری فنی و
                حرفه‌ای و دانشگاهی به راحتی می‌توانند مشغول به کار شوند. در این
                مطلب با سایت علم ساز همراه شوید تا با جایگاه رشته حسابداری در
                جهان آشنا شوید.
              </b>
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default Accounting;
