# Chatbot-using-NLTK

### Pre-requisites

Hands-On knowledge of scikit library and NLTK is assumed. However, if you are new to NLP, you can still read the article and then refer back to resources.

### Text Pre- Processing with NLTK

<li>Converting the entire text into uppercase or lowercase, so that the algorithm does not treat the same words in different cases as different</li>
<li>Tokenization: Tokenization is just the term used to describe the process of converting the normal text strings into a list of tokens i.e words that we actually want. Sentence tokenizer can be used to find the list of sentences and Word tokenizer can be used to find the list of words in strings.</li>

The NLTK data package includes a pre-trained Punkt tokenizer for English.

[+] Removing Noise i.e everything that isn’t in a standard number or letter.
[+] Removing Stop words. Sometimes, some extremely common words which would appear to be of little value in helping select documents matching a user need are excluded from the vocabulary entirely. These words are called stop words
[+] Stemming: Stemming is the process of reducing inflected (or sometimes derived) words to their stem, base or root form — generally a written word form. Example if we were to stem the following words: “Stems”, “Stemming”, “Stemmed”, “and Stemtization”, the result would be a single word “stem”.
[+] Lemmatization: A slight variant of stemming is lemmatization. The major difference between these is, that, stemming can often create non-existent words, whereas lemmas are actual words. So, your root stem, meaning the word you end up with, is not something you can just look up in a dictionary, but you can look up a lemma. Examples of Lemmatization are that “run” is a base form for words like “running” or “ran” or that the word “better” and “good” are in the same lemma so they are considered the same


[+] TF-IDF Approach : 
    TF : TERM FREQUENCY, (How frequent a word appears in a document)
    IDF : INVERSE DOCUMENT FREQUENCY (How rare a word is across documents)
    
    TF = (Number of times term t appears in a document)/(Number of terms in the document)
    IDF = 1+log(N/n), where, N is the number of documents and n is the number of documents a term t has appeared in.
    
[+] Cosine Similarity : 
    Cosine similarity is a measure of similarity between two non-zero vectors. Using this formula we can find out the similarity between any two documents d1 and d2.
    Cosine Similarity (d1, d2) =  Dot product(d1, d2) / ||d1|| * ||d2||
    where d1 and d2 are two non-zero vectors
    
    