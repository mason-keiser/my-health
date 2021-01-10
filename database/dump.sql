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
ALTER TABLE IF EXISTS public.users ALTER COLUMN user_id DROP DEFAULT;
ALTER TABLE IF EXISTS public.treatments ALTER COLUMN tx_id DROP DEFAULT;
ALTER TABLE IF EXISTS public.pain_notes ALTER COLUMN note_id DROP DEFAULT;
ALTER TABLE IF EXISTS public.journals ALTER COLUMN journal_id DROP DEFAULT;
DROP SEQUENCE IF EXISTS public.users_user_id_seq;
DROP TABLE IF EXISTS public.users;
DROP SEQUENCE IF EXISTS public.treatments_tx_id_seq;
DROP TABLE IF EXISTS public.treatments;
DROP SEQUENCE IF EXISTS public.pain_notes_note_id_seq;
DROP TABLE IF EXISTS public.pain_notes;
DROP SEQUENCE IF EXISTS public.journals_journal_id_seq;
DROP TABLE IF EXISTS public.journals;
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
-- Name: journals journal_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.journals ALTER COLUMN journal_id SET DEFAULT nextval('public.journals_journal_id_seq'::regclass);


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
-- Data for Name: journals; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.journals (journal_id, user_id, date_id, journal) FROM stdin;
1	1	January 7, 2021	Today was an alright day overall for me i felt like i saw some improvement in my qol today.
2	1	January 5, 2021	today was a pretty good day i managed to get a lot accomplished
3	1	January 8, 2021	post new journal entry
\.


--
-- Data for Name: pain_notes; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.pain_notes (note_id, user_id, date_id, pain_level, mood_level, pain_note) FROM stdin;
2	1	January 6, 2021	2	11	today was not the greatest day i had a headache for most of the day
3	1	January 5, 2021	6	13	this was an alright day i guess
6	1	January 6, 2021	1	9	not too bad today
8	1	January 7, 2021	8	16	crazy pain in my neck today\n
\.


--
-- Data for Name: treatments; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.treatments (tx_id, date_id, user_id, meds, mb_therapy, p_therapy, ch_therapy) FROM stdin;
1	January 6,2021	1	symbalta 5mg taken	meditated for 5 min	exercised for about 50min	iced my shoulders for 30 min
2	January 7,2021	1	smoked a lil gangja	practiced meditation	worked on exercising neck	iced shoulder
3	January 8,2021	1	\N	practiced meditation	worked on exercising neck	\N
4	January 10, 2021	1	took 5mg, ibruprofen	meditated throughout the day, and practiced minfulness	did an hour of stretching followed by 30 minutes of strength training	used the heatpad after my workouts
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
-- Name: journals_journal_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.journals_journal_id_seq', 3, true);


--
-- Name: pain_notes_note_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.pain_notes_note_id_seq', 10, true);


--
-- Name: treatments_tx_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.treatments_tx_id_seq', 4, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_user_id_seq', 5, true);


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

