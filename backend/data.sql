--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: movies; Type: TABLE; Schema: public; Owner: kathynguyen
--

CREATE TABLE public.movies (
    imdbid integer NOT NULL,
    movie_title text,
    thumbs_up text,
    thumbs_down text
);


ALTER TABLE public.movies OWNER TO kathynguyen;

--
-- Name: movies_imdbid_seq; Type: SEQUENCE; Schema: public; Owner: kathynguyen
--

CREATE SEQUENCE public.movies_imdbid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.movies_imdbid_seq OWNER TO kathynguyen;

--
-- Name: movies_imdbid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kathynguyen
--

ALTER SEQUENCE public.movies_imdbid_seq OWNED BY public.movies.imdbid;


--
-- Name: movies imdbid; Type: DEFAULT; Schema: public; Owner: kathynguyen
--

ALTER TABLE ONLY public.movies ALTER COLUMN imdbid SET DEFAULT nextval('public.movies_imdbid_seq'::regclass);


--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: kathynguyen
--

COPY public.movies (imdbid, movie_title, thumbs_up, thumbs_down) FROM stdin;
\.


--
-- Name: movies_imdbid_seq; Type: SEQUENCE SET; Schema: public; Owner: kathynguyen
--

SELECT pg_catalog.setval('public.movies_imdbid_seq', 1, false);


--
-- Name: movies movies_pkey; Type: CONSTRAINT; Schema: public; Owner: kathynguyen
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (imdbid);


--
-- PostgreSQL database dump complete
--

