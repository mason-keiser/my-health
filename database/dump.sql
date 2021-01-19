--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE IF EXISTS ONLY public.users DROP CONSTRAINT IF EXISTS users_username_key;
ALTER TABLE IF EXISTS ONLY public.users DROP CONSTRAINT IF EXISTS users_pkey;
ALTER TABLE IF EXISTS ONLY public.medications DROP CONSTRAINT IF EXISTS medications_pkey;
ALTER TABLE IF EXISTS ONLY public.doctors DROP CONSTRAINT IF EXISTS doctors_pkey;
ALTER TABLE IF EXISTS ONLY public.activities DROP CONSTRAINT IF EXISTS activities_pkey;
ALTER TABLE IF EXISTS public.users ALTER COLUMN user_id DROP DEFAULT;
ALTER TABLE IF EXISTS public.treatments ALTER COLUMN tx_id DROP DEFAULT;
ALTER TABLE IF EXISTS public.pain_notes ALTER COLUMN note_id DROP DEFAULT;
ALTER TABLE IF EXISTS public.medications ALTER COLUMN med_id DROP DEFAULT;
ALTER TABLE IF EXISTS public.journals ALTER COLUMN journal_id DROP DEFAULT;
ALTER TABLE IF EXISTS public.doctors ALTER COLUMN doctor_id DROP DEFAULT;
ALTER TABLE IF EXISTS public.activities ALTER COLUMN activity_id DROP DEFAULT;
DROP SEQUENCE IF EXISTS public.users_user_id_seq;
DROP TABLE IF EXISTS public.users;
DROP SEQUENCE IF EXISTS public.treatments_tx_id_seq;
DROP TABLE IF EXISTS public.treatments;
DROP SEQUENCE IF EXISTS public.pain_notes_note_id_seq;
DROP TABLE IF EXISTS public.pain_notes;
DROP SEQUENCE IF EXISTS public.medications_med_id_seq;
DROP TABLE IF EXISTS public.medications;
DROP SEQUENCE IF EXISTS public.journals_journal_id_seq;
DROP TABLE IF EXISTS public.journals;
DROP SEQUENCE IF EXISTS public.doctors_doctor_id_seq;
DROP TABLE IF EXISTS public.doctors;
DROP SEQUENCE IF EXISTS public.activities_activity_id_seq;
DROP TABLE IF EXISTS public.activities;
DROP EXTENSION IF EXISTS plpgsql;
DROP SCHEMA IF EXISTS public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: activities; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.activities (
    activity_id integer NOT NULL,
    user_id integer NOT NULL,
    date_id character varying(500) NOT NULL,
    activity_name character varying(500) NOT NULL,
    activity_description character varying(500)
);


--
-- Name: activities_activity_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.activities_activity_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: activities_activity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.activities_activity_id_seq OWNED BY public.activities.activity_id;


--
-- Name: doctors; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.doctors (
    user_id integer NOT NULL,
    doctor_id integer NOT NULL,
    doctor_name character varying(500) NOT NULL,
    street_address character varying(500) NOT NULL,
    state character varying(500) NOT NULL,
    city character varying(500) NOT NULL,
    zip_code character varying(500) NOT NULL,
    phone_number character varying(500) NOT NULL,
    note character varying(1000) NOT NULL
);


--
-- Name: doctors_doctor_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.doctors_doctor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: doctors_doctor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.doctors_doctor_id_seq OWNED BY public.doctors.doctor_id;


--
-- Name: journals; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.journals (
    journal_id integer NOT NULL,
    user_id integer,
    date_id character varying(500) NOT NULL,
    journal character varying(10000) NOT NULL
);


--
-- Name: journals_journal_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.journals_journal_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: journals_journal_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.journals_journal_id_seq OWNED BY public.journals.journal_id;


--
-- Name: medications; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.medications (
    user_id integer NOT NULL,
    med_id integer NOT NULL,
    med_name character varying(500) NOT NULL,
    med_instructions character varying(500) NOT NULL,
    med_image character varying
);


--
-- Name: medications_med_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.medications_med_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: medications_med_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.medications_med_id_seq OWNED BY public.medications.med_id;


--
-- Name: pain_notes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.pain_notes (
    note_id integer NOT NULL,
    user_id integer NOT NULL,
    date_id character varying(500) NOT NULL,
    pain_level character varying(500) NOT NULL,
    mood_level character varying(500) NOT NULL,
    pain_note character varying(500) NOT NULL
);


--
-- Name: pain_notes_note_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.pain_notes_note_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: pain_notes_note_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.pain_notes_note_id_seq OWNED BY public.pain_notes.note_id;


--
-- Name: treatments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.treatments (
    tx_id integer NOT NULL,
    date_id character varying(500) NOT NULL,
    user_id character varying(500) NOT NULL,
    meds character varying(1000),
    mb_therapy character varying(1000),
    p_therapy character varying(1000),
    ch_therapy character varying(1000)
);


--
-- Name: treatments_tx_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.treatments_tx_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: treatments_tx_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.treatments_tx_id_seq OWNED BY public.treatments.tx_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    username character varying(50) NOT NULL,
    email character varying(50) NOT NULL,
    password character varying(50) NOT NULL
);


--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: activities activity_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.activities ALTER COLUMN activity_id SET DEFAULT nextval('public.activities_activity_id_seq'::regclass);


--
-- Name: doctors doctor_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.doctors ALTER COLUMN doctor_id SET DEFAULT nextval('public.doctors_doctor_id_seq'::regclass);


--
-- Name: journals journal_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.journals ALTER COLUMN journal_id SET DEFAULT nextval('public.journals_journal_id_seq'::regclass);


--
-- Name: medications med_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.medications ALTER COLUMN med_id SET DEFAULT nextval('public.medications_med_id_seq'::regclass);


--
-- Name: pain_notes note_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pain_notes ALTER COLUMN note_id SET DEFAULT nextval('public.pain_notes_note_id_seq'::regclass);


--
-- Name: treatments tx_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.treatments ALTER COLUMN tx_id SET DEFAULT nextval('public.treatments_tx_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Data for Name: activities; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.activities (activity_id, user_id, date_id, activity_name, activity_description) FROM stdin;
16	1	January 18, 2021	yoga	30 minutes of hot yoga this afternoon
17	1	January 18, 2021	push ups	200 reps of pushups\n
\.


--
-- Data for Name: doctors; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.doctors (user_id, doctor_id, doctor_name, street_address, state, city, zip_code, phone_number, note) FROM stdin;
1	1	Dr Melissa Kim	9 sunningdale	CA	Coto de Caza	92679	714-504-8070	she is the best doctor ive ever been too hands down
1	4	Dr Mason Keiser	54 birmingham	CA	Irvine	92691	949-572-1976	chillest doctor in the world
1	7	Dr. James Yee	893 lightway	HI	Honolulu	92679	7145048070	best doctor in hawaii
\.


--
-- Data for Name: journals; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.journals (journal_id, user_id, date_id, journal) FROM stdin;
1	1	January 7, 2021	Today was an alright day overall for me i felt like i saw some improvement in my qol today.
\.


--
-- Data for Name: medications; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.medications (user_id, med_id, med_name, med_instructions, med_image) FROM stdin;
1	1	Oxycodon	Take one every 2 hours	"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUQEhMVFRUVFhUVFRcVFRUWFRgVFhUXFxUXFxUYHSggGBolHRYVIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAABAgUGBwj/xABAEAABAwIEAwYEAwYFAwUAAAABAAIRAyEEEjFBBRNRBiJhcYGRMqGxwSNC8AcUUmLR4RVjgpLxFkPSRFNyo+L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAmEQACAgICAgEEAwEAAAAAAAAAAQIREiEDMUFREwQUImEygaFx/9oADAMBAAIRAxEAPwDrBivlo4YtB..."
1	3	Aderall	take all the time	data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUQEhMVFRUVFhUVFRcVFRUWFRgVFhUXFxUXFxUYHSggGBolHRYVIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAABAgUGBwj/xABAEAABAwIEAwYEAwYFAwUAAAABAAIRAyEEEjFBBRNRBiJhcYGRMqGxwSNC8AcUUmLR4RVjgpLxFkPSRFNyo+L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAmEQACAgICAgEEAwEAAAAAAAAAAQIREiEDMUFREwQUImEygaFx/9oADAMBAAIRAxEAPwDrBivlo4YtB...
\.


--
-- Data for Name: pain_notes; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.pain_notes (note_id, user_id, date_id, pain_level, mood_level, pain_note) FROM stdin;
26	1	January 18, 2021	2	11	Had a good last 5 days with melissa, so doing pretty good
27	1	January 18, 2021	8	13	neck starting to hurt towards the end of the day
\.


--
-- Data for Name: treatments; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.treatments (tx_id, date_id, user_id, meds, mb_therapy, p_therapy, ch_therapy) FROM stdin;
4	January 10, 2021	1	took 5mg, ibruprofen	meditated throughout the day, and practiced minfulness	did an hour of stretching followed by 30 minutes of strength training	used the heatpad after my workouts
6	January 17, 2021	1	smoked an unholy amount of weed	did a little bit of stretching	couple reps of pushups	n/a
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (user_id, username, email, password) FROM stdin;
1	Mason	masonksr5@gmail.com	1234
2	Jimmy	yungjim@aol.com	imjim
3	Kyle	kyle@aol.com	imkyle
4	New Mas	keisermason@gmail.com	mk
5	Guest	guest@gmail.com	1234
\.


--
-- Name: activities_activity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.activities_activity_id_seq', 17, true);


--
-- Name: doctors_doctor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.doctors_doctor_id_seq', 8, true);


--
-- Name: journals_journal_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.journals_journal_id_seq', 6, true);


--
-- Name: medications_med_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.medications_med_id_seq', 3, true);


--
-- Name: pain_notes_note_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.pain_notes_note_id_seq', 27, true);


--
-- Name: treatments_tx_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.treatments_tx_id_seq', 8, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_user_id_seq', 5, true);


--
-- Name: activities activities_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.activities
    ADD CONSTRAINT activities_pkey PRIMARY KEY (activity_id);


--
-- Name: doctors doctors_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.doctors
    ADD CONSTRAINT doctors_pkey PRIMARY KEY (doctor_id);


--
-- Name: medications medications_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.medications
    ADD CONSTRAINT medications_pkey PRIMARY KEY (med_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

