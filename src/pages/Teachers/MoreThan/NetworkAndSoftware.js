import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import image from "../../../assets/images/Shabake.jpg";
import "./AllField.css";
function NetworkAndSoftware() {
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
                    to={"/accounting"}
                  >
                    رشته حسابداری
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
                    target="blank"
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
                    target="blank"
                    to={"/aboutUs"}
                  >
                    درباره هنرستان
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col sm={12} md={8} lg={9} className="my-3">
            <h2 className="p-5 fw-bold">رشته شبکه و نرم افزار</h2>
            <div className="text-center">
              <img src={image} alt="" className="img-fluid rounded shadow" />
            </div>
            <p className="p-5 text-justify my-4">
              رشته شبکه و نرم افزار رایانه که در گروه برق و رایانه قرار دارد،
              زیر مجموعه شاخه صنعت و از رشته های تحصیلی فنی حرفه ای است.
              <br />
              <br />
              بیشتر فرآیندهای اداری، مالی و تجاری در حال الکترونیکی شدن هستند و
              در این زمینه نیروهای مورد نیاز بازار کار در سطوح کارگر ساده و
              کارگر ماهر یکی از پایه‌های اساسی برای توفیق در این توسعه است. زیر
              ساخت‌های سخت‌افزاری و نرم‌افزاری در کشور به گونه‌ای است که برای
              تعمیر، نگهداری و توسعه آنها نیازمند نیروهای آموزش دیده در سطح
              کارگر ماهر است و به نظر می‌رسد بخشی از آموزش این مهارت‌ها باید در
              دوره متوسط دوم به عنوان یک رشته مستقل و در ادامه برای آمادگی جذب
              بازار در آموزش عالی به کسب مهارت‌های تکمیلی صورت پذیرد.
              <br />
              <br />
              با توجه به گسترش روزافزون دنیای رایانه، امروزه بیش از هر زمان
              دیگری نیاز به متخصصان رایانه احساس می شود. امروزه یک مهندس
              کامپیوتر اگر علاقمند به کار باشد، هیچ وقت با مشکل بیکاری روبه رو
              نمی شود. به خصوص مهندسین نرم افزار فرصت های شغلی بیشتری داشته و
              برای کارکردن نیاز به امکانات و تجهیزات زیادی ندارند. فرصت های شغلی
              این رشته به حدی گسترده و متعدد است که نه تنها فارغ التحصیلان این
              رشته به راحتی جذب بازار کار می شوند بلکه دانشجویان دو سال آخر این
              رشته نیز می توانند وارد بازار کار شده و فعالیت کنند. برای مهندسین
              سخت افزار هم امکان کار در شرکتهای تولید کننده قطعات و دستگاهها و
              مراکز صنعتی – تولیدی بسیار فراهم است و از نظر سطح درآمدی هم با
              توجه به دانش و پشتکار شخصی در حد قابل قبول و ایده آلی قرار دارند.
              از طرفی با توجه به استفاده روزافزون از شبکه اینترنت زمینه کار در
              این موضوع نیز بسیار مهیاست.
              <br />
              <br />
              توسعه، ایجاد و تغییر برنامه های نرم افزاری کامپیوتر ویا برنامه های
              تخصصی؛ تحلیل نیازهای کاربردی و ایجادراه حل های نرم افزاری؛ طراحی
              نرم افزار و اصلاح نرم افزارها و ایجاد کارایی در حد مطلوب از مهم
              ترین وظایف این حرفه است. این افراد ممکن است تحلیل و طراحی پایگاه
              داده های برنامه های کاربردی را نیز بر عهده بگیرند وبه تنهایی و یا
              گروهی عملیات توسعه و ایجاد پایگاه های داده را انجام دهند.
              <br />
              <br />
              <h5 className="p-3">لیست دروس رشته شبکه و نرم افزار رایانه</h5>
              <b>
                دروس تخصصی که هنرجویان در طی ۳ سال تحصیلی در پایه دهم، یازدهم،
                دوازدهم در رشته شبکه و نرم افزار رایانه می‌گذرانند عبارتند از :
              </b>
            </p>
            <Row className="px-5">
              {/* پایه دهم */}
              <Col sm={12} md={4} className="p-2">
                <Card className="bg-info fixed-style">
                  <Card.Header className="text-dark">پایه دهم :</Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="p-3">
                      نصب، راه‌اندازی و نگهداری سیستم عامل و نرم افزارهای
                      کاربردی (100 درصد عملی)
                    </ListGroup.Item>
                    <ListGroup.Item className="p-3">
                      تولید محتوای الکترونیک و برنامه سازی
                    </ListGroup.Item>
                    <ListGroup.Item className="p-3">
                      دانش فنی (1) (تئوری)
                    </ListGroup.Item>
                    <ListGroup.Item className="p-3">
                      نقشه کشی فنی رایانه (100 درصد عملی)
                    </ListGroup.Item>
                    <ListGroup.Item className="p-3">
                      الزامات محیط کار
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
              {/* پایه یازدهم */}
              <Col sm={12} md={4} className="p-2">
                <Card className="bg-info fixed-style">
                  <Card.Header className="text-dark">پایه یازدهم :</Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="p-3">
                      کارگاه نوآوری و کارآفرینی
                    </ListGroup.Item>
                    <ListGroup.Item className="p-3">
                      کاربرد فناوری های نوین
                    </ListGroup.Item>
                    <ListGroup.Item className="p-3">
                      طراحی و پیاده سازی پایگاه داده‌ها و وب
                    </ListGroup.Item>
                    <ListGroup.Item className="p-3">
                      تولید و پیاده سازی سیستم‌های اطلاعاتی
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
              {/* پایه دوازدهم */}
              <Col sm={12} md={4} className="p-2">
                <Card className="bg-info fixed-style">
                  <Card.Header className="text-dark">
                    پایه دوازدهم :
                  </Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="p-3">
                      فناوری و تولید
                    </ListGroup.Item>
                    <ListGroup.Item className="p-3">
                      اخلاق حرفه‌ای
                    </ListGroup.Item>
                    <ListGroup.Item className="p-3">
                      برنامه سازی و تولید نرم افزارهای کاربردی
                    </ListGroup.Item>
                    <ListGroup.Item className="p-3">
                      نصب و راه اندازی و نگهداری تجهیزات شبکه و سخت افزار
                    </ListGroup.Item>
                    <ListGroup.Item className="p-3">
                      طراحی و پیاده سازی شبکه‌های کامپیوتری
                    </ListGroup.Item>
                    <ListGroup.Item className="p-3">
                      دانش فنی (2)
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
            <p className="px-5 pt-3">
              پس از گذراندن دوره سه ساله تحصیلی در هنرستان می توانید در آزمون
              سراسری ویژه فنی و حرفه ای شرکت کنید و در مقاطع بالاتر تا مقطع
              دکتری به ادامه تحصیل بپردازید.
              <br />
              <br />
              <b>
                هنرجویان هنرستانی از 6 طریق ذیل می توانند وارد دانشگاه شوند :
              </b>
              <br />
              <br />
            </p>
            <Row className="px-5">
              <Col sm={12} className="p-2">
                <Card className="bg-info fixed-style">
                  <Card.Header className="text-dark">
                    3 راه برای تحصیل در مقطع کاردانی و 3 راه برای تحصیل در مقطع
                    کارشناسی
                  </Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="p-3">
                      کاردانی_پیوسته دانشگاه های فنی و حرفه ای و موسسات
                      غیرانتفاعی در ۵ رشته با آزمون(الکتروتکنیک،کامپیوتر،مکانیک
                      خودرو،حسابداری،تربیت بدنی)
                    </ListGroup.Item>
                    <ListGroup.Item className="p-3">
                      کاردانی پیوسته دانشگاه آزاد
                    </ListGroup.Item>
                    <ListGroup.Item className="p-3">
                      کاردانی پیوسته علمی_کاربردی
                    </ListGroup.Item>
                    <ListGroup.Item className="p-3">
                      کارشناسی برای دانش آموزان نظام جدید با شرکت در کنکور (در
                      یکی از زیر گروههای تجربی،ریاضی،انسانی و هنر و زبان)
                    </ListGroup.Item>
                    <ListGroup.Item className="p-3">
                      کارشناسی با سوابق :دانشگاه های دولتی (روزانه، شبانه و
                      غیرانتفاعی های کم طرفدار و پیام نور)
                    </ListGroup.Item>
                    <ListGroup.Item className="p-3">
                      کارشناسی با سوابق دانشگاه های آزاد
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
            <p className="px-5 py-3 text-justify">
              این رشته به دلیل پیشرفت تکنولوژی باعث شده است تا در مشاغل و صنایع
              مختلف تاثیر بسزایی داشته باشد.و این امر منجر به این شده تا همیشه
              در یک شرکت و یا در یک مجموعه نیاز یک تکنیسین کامپیوتر همیشه حس
              شود.‌رشته‌ی کامپیوتر بر خلاف رشته‌های دیگر دائماً نیاز به بروز شدن
              دارد.و شما برای تحصیل در این رشته باید به این توجه داشته باشید که
              بروز بودن فقط به این معنی نیست که شما از یک تکنولوژی جدید باخبر
              باشید بلکه باید اون تکنولوژی را یاد بگیرید.
              <br />
              <br />
              امروزه مشاغل ، شرکت‌ها و صنایع آنچنان نیاز خودشان را به کامپیوتر
              زیاد کرده‌اند که عمده کارها در این اماکن توسط کامپیوتر صورت میگیرد
              و این باعث شده تا بشر هر سال نیاز بیشتری به کامپیوتر و تکنولوژی
              داشته باشد.
            </p>
            <div className="text-center">
              <img src="https://bayanbox.ir/view/9018765952495637954/fanavari.jpg" alt="" className="shadow img-fluid rounded w-100" />
            </div>
            <p className="px-5 py-5 text-justify">
              دلیل اصلی محبوبیت این رشته گرایش‌های مختلف و جذاب آن است.به طوری
              که شما از هر گرایشی که در دانشگاه انتخاب میکنید میتوانید به صورت
              تخصصی در هر کدام از ریز شاخه‌های آن گرایش هم فعالیت و تحصیل کنید.
              <br />
              <br />
              مهم ترین اصلی که یک تکنسین و یک کارشناس کامپیوتر باید به آن توجه
              داشته باشد حرفه‌ای بودن در رشته‌ و شغل مورد نظر است . این موضوع به
              این معنا است که تنها گرفتن مدرک تحصیلی لازمه‌ی استخدام و یا راه
              اندازی یک کسب و کار نیست و شما باید نسبت به تحصیلات خود و تخصص خود
              مسلط باشید تا نتیجه و بازدهی تخصص خودتان را ببینید.
              <br />
              <br />
              پس برای بهتر شدن آینده‌ی شغلی و پیشرفت در حرفه‌ی شبکه و نرم افزار
              رایانه میبایست همیشه بروز بوده و از تمامی گرایش‌ها و آخرین
              تکنولوژی‌های روز دنیا اطلاعات کافی داشت و این وجه تمایز برای یک
              کارشناس حرفه‌ای کامیپوتر یک امتیاز بسیار خوب محسوب میشود.
              <br />
              <br />
              بهترین راه برای تحصیل در این رشته،شاخه‌ی فنی و حرفه‌ای میباشد به
              دلیل این که در این شاخه از پایه تمام جزئیات و کلیات تدریس میشود و
              دانش آموز از لحاظ علمی و عملی بسیار در سطح بالایی قرار میگیرد.و در
              ضمن افرادی که از شاخه‌ی فنی و حرفه‌ای وارد بازار کار میشوند خیلی
              متخصص تر و ماهرتر هستند. بعد از دریافت مدرک دیپلم میتوانید با شرکت
              در کنکور فنی و حرفه‌ای و قبولی در کنکور در دانشگاه‌های دولتی فنی و
              حرفه‌ای جذب شوید. یکی از راه‌های تحصیل در رشته‌ی کامپیوتر در
              دانشگاه‌ها به صورت بدون آزمون میباشد و شما بدون این که در کنکور
              شرکت کنید میتوانید جذب دانشگاه‌های خصوصی شوید.
            </p>
            <Row className="px-5 py-3">
              <Col sm={12} className="p-2">
                <Card className="bg-info fixed-style">
                  <Card.Header className="text-dark">
                    <b>گرایش‌های این رشته عبارتنداز:</b>
                  </Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="p-3">
                      مهندسی نرم افزار رایانه
                    </ListGroup.Item>
                    <ListGroup.Item className="p-3">
                      مهندسی سخت افزار رایانه
                    </ListGroup.Item>
                    <ListGroup.Item className="p-3">
                      فناوری اطلاعات(IT)
                    </ListGroup.Item>
                    <ListGroup.Item className="p-3">
                      علوم کامپیوتر
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
            <p className="px-5 py-3 text-justify">
              مهندسی نرم افزار رایانه در گرایش نرم افزار رایانه شما میتوانید با
              تولید یک نرم افزار رایانه‌ای بسیار کاربردی تبدیل به یک فرد معروف
              شوید.اگر نرم افزار شما به طوری طراحی شده باشد که به صورت بین
              المللی عرضه شود شما میتوانید تبدیل به یک فرد موفق در زمینه‌ی تولید
              نرم افزار تبدیل شوید.
              <br />
              <br />
              محل کار این مهندسان در شرکت‌های معتبر تولید نرم افزار و یا برای
              قسمت‌های پشتیبانی شرکت‌های خدمات کامپیوتری میباشد.
              <br />
              <br />
              مهندس سخت افزار رایانه به تحقیق،توسعه،طراحی و کنترل و تعمیر و
              آزمایش قطعات و تجهیزات کامپیوتر میپردازد.مهندسان سخت افزار رایانه
              اقلب در تلاش تولید و اختراع یک قطعه‌ی پیشرفته و متناسب با نرم
              افزارهای بروز و پیشرفته هستند.در کنار این موارد این مهندسان تلاش
              میکنند تا از نحوه‌ی صحیح عملکرده این قطعات مطمئن شوند و دائم با
              مهندسان نرم افزار،توسعه دهندگان و طراحان نرم افزار در ارتباط
              هستند.
              <br />
              <br />
              محل کار مهندسان سخت افزار اغلب در مجموعه های تحقیقاتی و
              پژوهشی،شرکت های کنترل کیفیت،مجموعه های معتبر تولید قطعات میباشد که
              به صورت تمام وجود در این مجموعه ها در حال تلاش هستند.
              <br />
              <br />
              فناوری اطلاعات ( It ) افرادی که در این رشته فارغ التحصیل میشوند در
              واقع به نام مهندس IT شناخته میشوند.این گرایش محبوب ترین گرایش رشته
              کامپیوتر میباشد و بسیار کاربردی در صنایع مختلف و مشاغل است.فعالیت
              فارغ التحصیلان این رشته بسیار گسترده است و به همین دلیل بازار کار
              بسیار خوبی دارد.
              <br />
              <br />
              برای تحصیل در این گرایش باید به چند نکته توجه داشت.مهم ترین آن این
              است که فردی که در این رشته در حال تحصیل است باید همیشه بروز باشد و
              با پیشرفت تکنولوژی های روز دنیا جلو برود.نکته‌ی دیگر این است که
              باید حوصله یادگیری تکنولوژی های جدید را داشته باشید تا بتوانید از
              این راه خدمات ارائه دهید و درآمدزایی کنید.
              <br />
              <br />
              فارغ التحصیلان این رشته خیلی سریع وارد بازار کار میشوند و دلیل آن
              نیاز بسیار بالای این رشته در مشاغل مختلف است.وظایف مهندسان IT در
              شرکت های مختلف توسعه،ساخت وب سایت،اجرای پشتیبانی های تخصصی نرم
              افزاری،جمع آوری کردن و سازمان‌دهی اطلاعات است.
              <br />
              <br />
              <b>
                امروزه رشته کامپیوتر در دنیا سومین تخصص و علم پر درآمد محسوب
                می‌شود و اهمیت بسیار زیادی در صنعت و تولید و علم دارد.
              </b>
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default NetworkAndSoftware;
