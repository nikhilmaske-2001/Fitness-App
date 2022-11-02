import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { exercisesOptions, fetchData } from "../utils/fetchData";
import ExerciseVideos from '../components/ExerciseVideos';
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';


const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDburl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDburl}/exercises/exercise/${id}`, exercisesOptions);
            setExerciseDetail(exerciseDetailData);
        }

        fetchExercisesData();
    }, [id])

    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos />
            <SimilarExercises />
        </Box>
    )
}

export default ExerciseDetail