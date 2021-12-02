import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { CONTRACT_ADDRESS, transformCharacterData } from '../utils/constants';
import HealthGame from '..//utils/HealthGame.json';

import Student from '../components/Student'
import Character from '../components/Character'
import NotificationMessage from '../components/NotificationMessage'
import SuccessNotification from '../components/SuccessNotification'

const Arena = ({ characterNFT, setCharacterNFT }) => {
  const [gameContract, setGameContract] = useState(null);
  const [student, setStudent] = useState(null);
  const [instructState, setInstructState] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [currentTechnique, setCurrentTechnique] = useState('')

  const runInstructAction = async (technique) => {
    try {
        if (gameContract) {
          setInstructState('instructing');
          setCurrentTechnique(technique)
          console.log(currentTechnique)
          console.log('Instructing student...');
          const instructTxn = await gameContract.instructStudent(technique.id);
          await instructTxn.wait();
          console.log('instructTxn:', instructTxn);
          setInstructState('');

          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 5000);
        }
      } catch (error) {
        console.error('Error instructing student:', error);
      }
      setInstructState('');
  };

  useEffect(() => {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const gameContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        HealthGame.abi,
        signer
      );

      setGameContract(gameContract);
    } else {
      console.log('Ethereum object not found');
    }
  }, []);

  useEffect(() => {
    const fetchStudent = async () => {
      const studentTxn = await gameContract.getStudent();
      console.log('Student:', studentTxn);
      setStudent(transformCharacterData(studentTxn));
    };

    const onInstructionComplete = (newStudentSleep, newStudentNutrition, newStudentActivity, newPlayerEnergy) => {
        const studentSleep = newStudentSleep.toNumber();
        const studentNutrition = newStudentNutrition.toNumber();
        const studentActivity = newStudentActivity.toNumber();
        const playerEnergy = newPlayerEnergy.toNumber();

        console.log(`Instruction Complete: Student sleep: ${studentSleep}, nutrition: ${studentNutrition} , activity: ${studentActivity}  Player energy: ${playerEnergy}`);

        setStudent((prevState) => {
            return { ...prevState, sleep: studentSleep, nutrition: studentNutrition, activity: studentActivity };
        });

        setCharacterNFT((prevState) => {
            return { ...prevState, energy: playerEnergy };
        });
    };

  
    if (gameContract) {
      fetchStudent();
      gameContract.on('InstructionComplete', onInstructionComplete);
    }

    return () => {
        if (gameContract) {
            gameContract.off('InstructionComplete', onInstructionComplete);
        }
    }
  }, [gameContract]);

  return (

    <div className="bg-white">

    <main className="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:pt-24 sm:pb-32 lg:px-8">
      <div className="max-w-xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Health Game</h1>
        <p className="mt-2 text-sm text-gray-500">
          Team up to learn proper health.
        </p>
      </div>


    <div className="">

    {student && characterNFT && showToast && (
      <div>
        <SuccessNotification message={`${student.name} was instructed ${currentTechnique.name}. Now has sleep score ${student.sleep}, nutrition score ${student.nutrition}, and activity score ${student.activity}!`} />
      </div>
    )}

      {student && (
      <div className="">

        {instructState === 'instructing' && (
        <NotificationMessage message={currentTechnique.action} />


      )}

      

      
      <Student student={student} />
      </div>
    )}

    {characterNFT && (
      <div className="">
        <Character characterNFT={characterNFT} runInstructAction={runInstructAction} />
      </div>
      
    )}
    </div>


</main>
</div>

  );
};

export default Arena;