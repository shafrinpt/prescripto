import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.jpg'
import contact_image from './contact_image.jpg'
import about_image from './about_image.jpg'
import logo from './Logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.jpg'
import doc2 from './doc2.jpg'
import doc3 from './doc3.png'
import doc4 from './doc4.jpg'
import doc5 from './doc5.jpg'
import doc6 from './doc6.jpg'
import doc7 from './doc7.jpg'
import doc8 from './doc8.jpg'
import doc9 from './doc9.jpg'
import doc10 from './doc10.jpg'
import doc11 from './doc11.jpg'
import doc12 from './doc12.jpg'
import doc13 from './doc13.png'
import doc14 from './doc14.jpg'
import doc15 from './doc15.jpg'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Navaneed',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees:500,
        address: {
            line1: '7th Cross, bangalore',
            line2: 'Circle, Ring Road, bangalore'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Roy Thomus',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr Roy Thomus is a distinguished Gynecologist based at Apollo Multispecialty Hospitals. With an impressive 42 years of experience in the medical field, he has dedicated his career to providing exceptional healthcare services to patients. He holds MBBS (1971), MD (1979), Dip. Card. (1976), FCCP, showcasing his extensive training and commitment to medical excellence.',
        fees: 600,
        address: {
            line1: 'Canal Circular Road , Kolkata',
            line2: 'Vijay Nagar , Kolkata'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Ashwini M',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '12 Years',
        about: 'Dr Ashwini M Shetty is a distinguished Dermatologist based at Apollo Hospitals Bannerghatta Road. With an impressive 12 years of experience in the medical field, she has dedicated her career to providing exceptional healthcare services to patients. She holds MBBS,MD (DVL), Fellowship in Phycho Dermatology, showcasing her extensive training and commitment to medical excellence',
        fees: 300,
        address: {
            line1: 'Gandhinagar , Ahmedabad',
            line2: 'Greams Road , Chennai'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Aathira Ravindranath',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Aathira Ravindranath is a highly skilled Paediatric Gastroenterologist based in Mysuru, Karnataka, with over 2 years of dedicated experience in the field of paediatric medicine. Holding an MBBS, MD in Paediatrics, and a DM in Paediatric Gastroenterology, she is well-equipped to address a wide range of gastrointestinal issues affecting children.',
        fees: 400,
        address: {
            line1: 'Guwahati & RGB road , Guwahati',
            line2: 'Thousand Lights , Chennai'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Anu Vij',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Anu Vij is a highly experienced Obstetrician and Neurologist based in Mumbai, Maharashtra, with an impressive 4 years of clinical practice. She is passionate about womens health and has dedicated her career to providing exceptional care in the fields of obstetrics and Neurologist.',
        fees: 500,
        address: {
            line1: 'Navi Mumbai , Mumbai',
            line2: 'Jubileehills , Hyderabad'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Divya Prakash',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr.Divya Prakash is a highly accomplished Neurosurgeon based in Kolkata, West Bengal, with a commendable 4 years of experience in the field. He holds an impressive educational background, having completed his MBBS from KEM Hospital in Bombay, followed by a Master of Surgery (M.S.) in General Surgery from SSKM, for which he was awarded a Gold Medal',
        fees: 500,
        address: {
            line1: 'Canal Circular Road , Kolkata',
            line2: 'Sector 26 , Noida'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Archanaa D',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Archanaa D is a highly skilled General physician based in Chennai, Tamil Nadu, with 4 years of comprehensive experience in the field of mental health.',
        fees: 500,
        address: {
            line1: 'GREAMS ROAD , Chennai',
            line2: 'Canal Circular Road , Kolkata'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Asma J A',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Asma J A is a highly experienced Obstetrician and Gynaecologist based in Chennai, Tamil Nadu, with 18 years of dedicated practice in the field. She is a graduate of MBBS and holds advanced degrees including MD, DNB, MNAMS, and MRCOG, demonstrating her extensive knowledge and commitment to womens health',
        fees: 600,
        address: {
            line1: 'Kotturpuram , Chennai',
            line2: 'GREAMS ROAD , Chennai'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr.Ashwak Ahmed',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Ashwak Ahmed N is a highly skilled Dermatologist with over 2 years of experience in the field of dermatology. Based in Chennai, Tamil Nadu, he has established a reputation for providing exceptional skincare solutions and treatments.',
        fees: 300,
        address: {
            line1: 'Old Mahabalipuram Road , Chennai',
            line2: 'Kotturpuram , Chennai'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr.Anagha Bhagwat',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Anagha Bhagwat is a highly experienced Paediatric Neurologist with a practice spanning over 2 years. Based in Indore, Madhya Pradesh, she has dedicated her career to the diagnosis and treatment of neurological conditions in children. ',
        fees: 400,
        address: {
            line1: 'BANNERGHATTA ROAD , Bangalore',
            line2: 'Sheshadripuram , Bangalore'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Amit Kapoor',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Amit Kapoor is a highly experienced neurosurgeon based in Hyderabad, Jubileehills, with a remarkable 4 years of expertise in the field of neurosurgery.',
        fees: 500,
        address: {
            line1: ' Secbad , Hyderabad',
            line2: 'Jubileehills , Hyderabad'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr.Deepika J',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Deepika J Mahapatra is a highly esteemed neurosurgeon with over 4 years of dedicated experience in the field. Based in Visakhapatnam, Andhra Pradesh, she has gained a reputation for his exceptional surgical skills and compassionate patient care.',
        fees: 500,
        address: {
            line1: 'BANNERGHATTA ROAD , Bangalore',
            line2: 'Sheshadripuram , Bangalore'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Anupa',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '14 Years',
        about: 'Dr. Anupa  is a highly skilled and experienced Obstetrician and Gynaecologist based in Bhopal, Madhya Pradesh. With over 14 years of dedicated practice, Dr. Anupama has become a trusted name in womens health, specializing in both obstetrics and gynaecology.',
        fees: 500,
        address: {
            line1: ' Secbad , Hyderabad',
            line2: 'Jubileehills , Hyderabad'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Adil Abdul Khadar',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Adil is a highly qualified Infertility Specialist based in Chennai, Tamil Nadu, with 1 years of experience in the field of reproductive medicine. He holds an MBBS and an MD in Obstetrics and Gynaecology, having achieved university first honors in his postgraduate degree.',
        fees: 600,
        address: {
            line1: 'Old Mahabalipuram Road , Chennai',
            line2: 'Kotturpuram , Chennai'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Fathima',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Fathima is a dedicated and skilled Dermatologist based in Visakhapatnam, Andhra Pradesh. With 3 years of experience in the field, she has established herself as a trusted healthcare professional who is committed to providing exceptional care to her patients.',
        fees: 300,
        address: {
            line1: 'Kakkanad, Kochi',
            line2: 'Beach Road, Calicut'
        }
    },
]